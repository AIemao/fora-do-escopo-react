import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ModalConfigInfo from "../components/ModalConfigInfo/ModalConfigInfo";
import ModalMailSend from "../components/ModalMailSend/ModalMailSend";
import ServiceForm from "../components/ServiceForm/ServiceForm";
import TpInfo from "../components/TpInfo/TpInfo";
import style from "./Form.module.css";

export default function InstalacaoForm() {
  const [items, setItems] = useState([
    { id: 1, label: "SERVIDOR COM BACKUP", value: 240.0, quantity: 0 },
    { id: 2, label: "SERVIDOR SEM BACKUP", value: 480.0, quantity: 0 },
    { id: 3, label: "TERMINAL PDV", value: 240.0, quantity: 0 },
    {
      id: 4,
      label: "INTEGRADOR DELIVERY/APP DO CONSUMIDOR",
      value: 240.0,
      quantity: 0,
    },
    {
      id: 5,
      label: "INSTALAÇÃO LINX DEGUST MOBILE",
      value: 480.0,
      quantity: 0,
    },
    { id: 6, label: "APK MOBILE", value: 240.0, quantity: 0 },
    {
      id: 7,
      label: "INSTALAÇÃO TERMINAL AUTO ATENDIMENTO",
      value: 480.0,
      quantity: 0,
    },
    { id: 8, label: "PAINEL DE SENHA", value: 240.0, quantity: 0 },
    { id: 9, label: "KDS", value: 240.0, quantity: 0 },
    {
      id: 10,
      label: "TASTE ONE - SERVIDOR + TERMINAL (FÍSICO)",
      value: 480.0,
      quantity: 0,
    },
    {
      id: 11,
      label: "TASTE ONE - SERVIDOR/TERMINAL (CLOUD)",
      value: 240.0,
      quantity: 0,
    },
    {
      id: 12,
      label: "DEGUST ONE - TREINAMENTO (HORA)",
      value: 240.0,
      quantity: 0,
    },
  ]);
  const [, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [tpValue, setTpValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [envioInformacaoModalVisible, setEnvioInformacaoModalVisible] =
    useState(false); // Para o modal de envio de informações
  const { handleSubmit } = useForm();
  const [clas, setClas] = useState("table-danger");
  const [linha, setLinha] = useState("linha01");
  const [checkboxVisibility, setCheckboxVisibility] = useState(
    Array(items.length).fill(true)
  );
  const checkboxRefs = useRef([]);
  const [backup, setBackup] = useState("");
  const [mobile, setMobile] = useState("");
  const [AA, setAA] = useState("");
  const [lojaParada, setLojaParada] = useState("");
  const [quantidadePDVs, setQuantidadePDVs] = useState("");
  const [quantidadePDVsInstalados, setQuantidadePDVsInstalados] = useState("");
  const [numeroPDVInstalado, setNumeroPDVInstalado] = useState("");
  const [emissorCupom, setEmissorCupom] = useState("");
  const [satCode, setSatCode] = useState(null);
  const [marcaModeloEmissorCupom, setMarcaModeloEmissorCupom] = useState("");
  const [impressorasRemotas, setImpressorasRemotas] = useState("");
  const [marcaModeloImpressorasRemotas, setMarcaModeloImpressorasRemotas] =
    useState("");
  const [pinPad, setPinPad] = useState("");
  const [marcaModeloPinPad, setMarcaModeloPinPad] = useState("");
  const [equipamentoConectado, setEquipamentoConectado] = useState("");
  const [marcaModeloEquipamentoConectado, setMarcaModeloEquipamentoConectado] =
    useState("");

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setItems(updatedItems);

    const newTotal = updatedItems.reduce(
      (acc, item) => acc + item.value * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const processar = () => {
    setModalVisible(true)
    processaForaEscopo();

    // Define o TP e o Total em estado
    setTpValue(tpValue);
    setTotal(total);

    // Verifica as condições para mostrar o modal ou montar o email
    if (
      (items[0].quantity > 0 && items[0].quantity > 0) ||
      (items[1].quantity > 0 && items[1].quantity > 0)
    ) {
      setModalVisible(true);
    } else {
      montaEmail();
    }
    // }
    //   }
    // }
  };

  function processaForaEscopo() {
    const updatedItems = items.map((item, index) => {
      const checkbox = checkboxRefs.current[index];

      if (checkbox && checkbox.checked) {
        const quantidade = item.quantity;

        if (quantidade > 0) {
          ajusteEstilo(index);
          // Note que 'clas' e 'linha' devem ser estados do React
          // definidos previamente em seu componente.
          setClas(validaClass(clas));
          setLinha(validaLinha(linha));

          preencheForaEscopo(index);

          // Marque o checkbox como invisível
          const updatedVisibility = [...checkboxVisibility];
          updatedVisibility[index] = false;
          setCheckboxVisibility(updatedVisibility);

          setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);

          // Atualize o estado do item com a quantidade
          return { ...item, quantity: quantidade };
        }
      }
      return item;
    });

    // Atualize o estado dos itens com as quantidades
    setItems(updatedItems);
  }

  // Atualize o estado dos itens com as quantidades

  const validaSelecao = () => {
    return items.some((item) => item.quantity > 0);
  };

  function validaQtd() {
    return items.reduce((cont, item, index) => {
      const checkboxId = `inf0${index + 1}`;
      const quantidadeInput = `qtd0${index + 1}`;
      const checkbox = document.getElementById(checkboxId);

      if (checkbox && checkbox.checked) {
        const quantidade = parseInt(quantidadeInput.value, 10);
        if (quantidade === 0) {
          return cont + 1;
        }
      }
      return cont;
    }, 0);
  }

  function montaEmail() {
    setModalVisible(true);
  }

  function ajusteEstilo(n) {
    // Supondo que você tenha uma lista de itens no estado
    const updatedItems = [...items];

    // Suponha que 'clas' e 'linha' sejam propriedades dos itens em 'items'
    updatedItems[n - 1].clas = clas;
    updatedItems[n - 1].linha = linha;

    // Atualize o estado dos itens
    setItems(updatedItems);
  }

  function validaClass(clas_) {
    // Supondo que 'clas_' seja uma propriedade ou variável de estado no seu componente React

    let clas;

    if (clas_ !== "table-light") {
      clas = "table-light";
    } else {
      clas = "table-danger";
    }

    return clas;
  }

  function validaLinha(linha_) {
    // Supondo que 'linha_' seja uma propriedade ou variável de estado no seu componente React

    let linha;

    if (linha_ !== "linha02") {
      linha = "linha02";
    } else {
      linha = "linha01";
    }

    return linha;
  }

  function preencheForaEscopo(n) {
    // Supondo que 'n' seja um índice baseado em 1 e que você tenha o estado 'items'

    const itemIndex = n - 1;

    // Suponha que 'valor0', 'qtd0', e 'stotal0' sejam propriedades dos itens em 'items'
    const valor = document.getElementById(`valor0${n}`).value;
    const quantidade = document.getElementById(`qtd0${n}`).value;
    const subtotal = document.getElementById(`stotal0${n}`).value;

    const updatedItems = [...items];
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      valor,
      quantidade,
      subtotal,
    };

    // Atualize o estado com os valores atualizados
    setItems(updatedItems);
  }

  const handleCopyAnswers = () => {
    // Crie um objeto com todas as respostas
    const answersText = `
    1- A instalação será realizada em um Terminal ou Servidor? Se for servidor, com backup ou sem dados?
    ${backup}

    2- A loja utiliza Mobile (Tablet)?
    ${mobile}

    3- A loja utiliza Auto Atendimento ONE?
    ${AA}

    4- Loja está parada?
    ${lojaParada}

    5- Quantos PDVs a loja possui?
    ${quantidadePDVs}

    6- Quantos PDVs serão instalados?
    ${quantidadePDVsInstalados}

    7- Qual o número do PDV que será instalado?
    ${numeroPDVInstalado}

    8- Qual é o emissor de cupom utilizado (S@T, NFCE, ECF)?
    ${emissorCupom}

    ${satCode ?
        `Código de ativação:
    ${satCode}` : ""
      }

    9- Qual é a marca e modelo da impressora de Cupom Fiscal (DANFE)?
    ${marcaModeloEmissorCupom}

    10- Impressoras Remotas?
    ${impressorasRemotas}

    ${impressorasRemotas === "Sim" ?
        `Marca/Modelo Impressoras Remotas:
    ${marcaModeloImpressorasRemotas}` : ""
      }

    11- Loja tem PIN PAD?
    ${pinPad}

    ${pinPad === "Sim" ?
        `Marca/Modelo PIN PAD:
    ${marcaModeloPinPad}` : ""
      }

    12- Existe mais algum equipamento conectado à máquina?
    ${equipamentoConectado}

    ${equipamentoConectado === "Sim" ?
        `Marca/Modelo Equipamento Conectado:
    ${marcaModeloEquipamentoConectado}` : ""
      }
    `;

    // Copie o texto para a área de transferência
    navigator.clipboard.writeText(answersText).then(() => {
      alert("Respostas copiadas para a área de transferência!");
    });

    setModalVisible(false);
  };

  const handleOpenModal = () => {
    console.log("Opening copyAnswersModalVisible modal");
    processar();
  };

  const handleOpenEnvioInformacaoModal = () => {
    if (tpValue === "") {
      alert("Informe o número da TP");
      return;
    }

    if (validaSelecao() === false) {
      alert("Selecione uma opção!");
      return;
    }


    if (validaQtd() > 0) {
      setModalVisible(false);
      alert("Informe a Quantidade!");
      return;
    }

    console.log("Opening envioInformacaoModalVisible modal");
    setEnvioInformacaoModalVisible(true);
  };

  const handleReset = () => {
    setItems([
      { id: 1, label: "SERVIDOR COM BACKUP", value: 240.0, quantity: 0 },
      { id: 2, label: "SERVIDOR SEM BACKUP", value: 480.0, quantity: 0 },
      { id: 3, label: "TERMINAL PDV", value: 240.0, quantity: 0 },
      {
        id: 4,
        label: "INTEGRADOR DELIVERY/APP DO CONSUMIDOR",
        value: 240.0,
        quantity: 0,
      },
      {
        id: 5,
        label: "INSTALAÇÃO LINX DEGUST MOBILE",
        value: 480.0,
        quantity: 0,
      },
      { id: 6, label: "APK MOBILE", value: 240.0, quantity: 0 },
      {
        id: 7,
        label: "INSTALAÇÃO TERMINAL AUTO ATENDIMENTO",
        value: 480.0,
        quantity: 0,
      },
      { id: 8, label: "PAINEL DE SENHA", value: 240.0, quantity: 0 },
      { id: 9, label: "KDS", value: 240.0, quantity: 0 },
      {
        id: 10,
        label: "TASTE ONE - SERVIDOR + TERMINAL (FÍSICO)",
        value: 480.0,
        quantity: 0,
      },
      {
        id: 11,
        label: "TASTE ONE - SERVIDOR/TERMINAL (CLOUD)",
        value: 240.0,
        quantity: 0,
      },
      {
        id: 12,
        label: "DEGUST ONE - TREINAMENTO (HORA)",
        value: 240.0,
        quantity: 0,
      },
    ]);
    const resetItems = items.map((item) => ({ ...item, quantity: 0 }));
    setItems(resetItems);
    setTotal(0);
    setTpValue("");
    setBackup("");
    setMobile("");
    setAA("");
    setLojaParada("");
    setQuantidadePDVs("");
    setQuantidadePDVsInstalados("");
    setNumeroPDVInstalado("");
    setEmissorCupom("");
    setMarcaModeloEmissorCupom("");
    setImpressorasRemotas("");
    setMarcaModeloImpressorasRemotas("");
    setPinPad("");
    setMarcaModeloPinPad("");
    setEquipamentoConectado("");
    setMarcaModeloEquipamentoConectado("");
    setCheckboxVisibility(Array(items.length).fill(true));

    for (let i = 0; i < 12; i++) {
      const inputCheckBoxId = `inf${i}`
      const inputElementSelected = document.getElementById(inputCheckBoxId)
      console.log(inputElementSelected)
    }
  };

  return (
    <div id="interface" className={style.interface}>
      <form
        id="formulario"
        onSubmit={handleSubmit(onSubmit)}
        className={style.form}
      >
        <TpInfo tpValue={tpValue} setTpValue={setTpValue} />
        <ServiceForm
          items={items}
          handleQuantityChange={handleQuantityChange}
          total={total}
          handleOpenModal={handleOpenModal}
          handleReset={handleReset}
          handleOpenEnvioInformacaoModal={handleOpenEnvioInformacaoModal}
        />
      </form>

      {modalVisible && (
        <ModalConfigInfo
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setBackup={setBackup}
          setMobile={setMobile}
          setAA={setAA}
          setLojaParada={setLojaParada}
          setQuantidadePDVs={setQuantidadePDVs}
          setQuantidadePDVsInstalados={setQuantidadePDVsInstalados}
          setNumeroPDVInstalado={setNumeroPDVInstalado}
          emissorCupom={emissorCupom}
          setEmissorCupom={setEmissorCupom}
          setSatCode={setSatCode}
          setMarcaModeloEmissorCupom={setMarcaModeloEmissorCupom}
          setImpressorasRemotas={setImpressorasRemotas}
          setMarcaModeloImpressorasRemotas={setMarcaModeloImpressorasRemotas}
          setPinPad={setPinPad}
          setMarcaModeloPinPad={setMarcaModeloPinPad}
          setEquipamentoConectado={setEquipamentoConectado}
          setMarcaModeloEquipamentoConectado={
            setMarcaModeloEquipamentoConectado
          }
          impressorasRemotas={impressorasRemotas}
          pinPad={pinPad}
          equipamentoConectado={equipamentoConectado}
          handleCopyAnswers={handleCopyAnswers}
        />
      )}

      {envioInformacaoModalVisible && (
        <ModalMailSend
          envioInformacaoModalVisible={envioInformacaoModalVisible}
          setEnvioInformacaoModalVisible={setEnvioInformacaoModalVisible}
          tpValue={tpValue}
          items={items}
          total={total}
        />
      )}
    </div>
  );
}
