import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal"; //
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
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [tpValue, setTpValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [copyAnswersModalVisible, setCopyAnswersModalVisible] = useState(false); // Para o modal de cópia de respostas
  const [envioInformacaoModalVisible, setEnvioInformacaoModalVisible] =
    useState(false); // Para o modal de envio de informações
  const { control, handleSubmit } = useForm();
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
    if (tpValue === "") {
      alert("Informe o número da TP");
    } else {
      if (validaSelecao() === false) {
        setModalVisible(false);
        alert("Selecione uma opção!");
      } else {
        if (validaQtd() > 0) {
          setModalVisible(false);
          alert("Informe a Quantidade!");
        } else {
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
        }
      }
    }
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
    A instalação será realizada com Backup ou Base Zerada? 
    ${backup}
    
    A loja utiliza Mobile (Tablet)? 
    ${mobile}

    A loja utiliza Auto Atendimento ONE? 
    ${AA}

    Loja está parada? 
    ${lojaParada}

    Quantos PDVs a loja possui? 
    ${quantidadePDVs}

    Quantos PDVs serão instalados? 
    ${quantidadePDVsInstalados}

    Qual o número do PDV que será instalado? 
    ${numeroPDVInstalado}

    Qual é o emissor de cupom utilizado (S@T, NFCE, ECF)? 
    ${emissorCupom}

    Qual é a marca e modelo do emissor de cupom (DANFE)? 
    ${marcaModeloEmissorCupom}

    Impressoras Remotas? 
    ${impressorasRemotas}
    ${
      impressorasRemotas === "Sim"
        ? `Marca/Modelo Impressoras Remotas: ${marcaModeloImpressorasRemotas}`
        : ""
    }

    Loja tem PIN PAD? 
    ${pinPad}
    ${pinPad === "Sim" ? `Marca/Modelo PIN PAD: ${marcaModeloPinPad}` : ""}

    Existe mais algum equipamento conectado à máquina? 
    ${equipamentoConectado}
    ${
      equipamentoConectado === "Sim"
        ? `Marca/Modelo Equipamento Conectado: ${marcaModeloEquipamentoConectado}`
        : ""
    }
    `;

    // Copie o texto para a área de transferência
    navigator.clipboard.writeText(answersText).then(() => {
      alert("Respostas copiadas para a área de transferência!");
    });
  };

  // const handleEnvioInformacao = () => {
  //   const itensSelecionados = items.filter((item) => item.quantity > 0);
  //   // Montar o e-mail com as informações necessárias
  //   const emailBody = `
  //         Prezado Cliente,

  //         Com base no catálogo de serviços fora do escopo padrão de suporte, informamos que será cobrada uma taxa pelo serviço citado abaixo. A taxa será faturada no próximo fechamento do período e será enviado um boleto separado. Estando de acordo, gentileza responder esse e-mail para que possamos dar continuidade ao processo de agendamento do procedimento.

  //         INFORMAÇÕES DO CLIENTE:
  //         TP: ${tpValue}
  //         NOME COMPLETO:
  //         CPF:
  //         CARGO:
  //         CNPJ:
  //         RAZÃO SOCIAL:
  //         NOME LOJA/REDE:
  //         ENDEREÇO:
  //         TELEFONE:

  //         Tabela:
  //         Descrição do Serviço Fora do Escopo:
  //         ${itensSelecionados
  //           .map(
  //             (item) =>
  //               `${item.label} // Valor: ${item.value} // Quantidade: ${
  //               item.quantity
  //               } // Subtotal: ${item.value * item.quantity}`
  //           )
  //         .join("\n")}
  //         Total: ${itensSelecionados.reduce(
  //         (acc, item) => acc + item.value * item.quantity,
  //         0
  //     )
  //   }

  //         PRÉ-REQUISITOS:
  //         Consulte os requisitos mínimos de equipamentos em: https://share.linx.com.br/x/P7Ow

  //         Segue o Linx Share de Boas Práticas do nosso Suporte: https://share.linx.com.br/pages/viewpage.action?pageId=65923790

  //         O serviço será feito por conexão através do Software de Acesso Remoto.

  //         “A Linx reserva-se no direito de preservar o bom funcionamento do sistema, que envolve atender aos requisitos mínimos de equipamento e integração com periféricos, desde que estes estejam em perfeito estado de funcionamento e sob a adequada configuração fornecida pelo fabricante e pela Equipe Linx Degust”.

  //         É obrigatório o preenchimento de todos os dados para autorizar o serviço. Caso o email não seja respondido com todos os dados do responsável dentro do prazo determinado, o chamado será cancelado automaticamente.

  //         Este termo de aceite é válido por 72 horas, caso não seja respondido dentro do prazo o chamado será cancelado automaticamente.

  //         Ficamos no aguardo para darmos continuidade.
  //       `;

  //   navigator.clipboard.writeText(emailBody).then(() => {
  //     alert("Respostas copiadas para a área de transferência!");
  //   });
  // };

  const handleOpenModal = () => {
    console.log("Opening copyAnswersModalVisible modal");
    processar();
    setModalVisible(true);
  };

  const handleOpenEnvioInformacaoModal = () => {
    console.log("Opening envioInformacaoModalVisible modal");
    setEnvioInformacaoModalVisible(true);
  };

  const classeCondicional =
    items.id % 2 === 0 ? style.tablelight : style.tabledanger;

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
    }

  return (
    <div id="interface" className={style.interface}>
      <form
        id="formulario"
        onSubmit={handleSubmit(onSubmit)}
        className={style.form}
      >
        <fieldset id="fieldset" className={style.fieldset}>
  <legend className={style.legend}>Preencha os campos</legend>

  <div className={style.inputContainer}>
    <label htmlFor="tp">TP: </label>
    <input
      type="text"
      id="tp"
      placeholder="1232456"
      name="nome"
      value={tpValue}
      onChange={(e) => setTpValue(e.target.value)}
      className={style.inputText}
    />
  </div>

  <div className={style.importantTextContainer}>
    <p className={style.importantText}>
      Importante! - Caso seja SERVIDOR SEM BACKUP - Oriente a loja a verificar a tributação antes de iniciar a instalação
    </p>
    <p className={style.importantText}>
      Periféricos devidamente instalados e se comunicando com o Windows
    </p>
  </div>
</fieldset>


        <table className={style.tablestriped}>
          <thead className={style.tablehead}>
            <tr>
              <th scope="col">Descrição do Serviço Fora do Escopo</th>
              <th scope="col">Valor</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className={
                  item.id % 2 === 0 ? style.tabledanger : style.tablelight
                }
              >
                <td className={style.descricaoServico}>
                  <input
                    type="checkbox"
                    name={`n_item${item.id}`}
                    id={`inf${item.id}`}
                    value={item.id}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.checked ? 1 : 0)
                    }
                  />
                  <label className="txt" htmlFor={`inf${item.id}`}>
                    {item.label}
                  </label>
                </td>
                <td className={`linha${item.id % 2 === 0 ? "02" : "01"}`}>
                  R$: {item.value}
                </td>
                <td className={`linha${item.id % 2 === 0 ? "02" : "01"}`}>
                  <input
                    className={`linha${item.id % 2 === 0 ? "02" : "01"}`}
                    type="number"
                    value={item.quantity}
                    min="0"
                    max="20"
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </td>
                <td className={`linha${item.id % 2 === 0 ? "02" : "01"}`}>
                  R$: {item.value * item.quantity}
                </td>
              </tr>
            ))}
            <tr className="table-light">
              <th scope="row"></th>
              <td className="vazio"></td>
              <td className="padrao">
                <label className="txt">Total:</label>
              </td>
              <td className="linha02">
                <input
                  className="linha02"
                  value={total}
                  type="number"
                  id="total"
                  readOnly
                  disabled
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={style.buttonContainer}>
          <button
            type="submit"
            className={style.processButton}
            id="processar"
            onClick={handleOpenModal}
          >
            Processar
          </button>
          <button
            type="button"
            className={style.resetButton}
            id="reset"
            onClick={handleReset}
          >
            Reset
          </button>

          <button
            type="button"
            className={style.envioButton}
            onClick={handleOpenEnvioInformacaoModal}
          >
            Envio de Informação
          </button>
        </div>
      </form>

      {/* Modal Mobile */}
      {modalVisible && (
        <Modal
          isOpen={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          contentLabel="Perguntas"
          ariaHideApp={false}
        >
          {/* Conteúdo do modal */}
          <h2>Preencha as perguntas:</h2>
          <form>
            <div className="pergunta">
              <p>A instalação será realizada com Backup ou Base Zerada?</p>

              <input
                type="radio"
                name="backup"
                value="Backup"
                onChange={(e) => setBackup(e.target.value)}
              />
              <label>Backup</label>
              <input
                type="radio"
                name="backup"
                value="Base Zerada"
                onChange={(e) => setBackup(e.target.value)}
              />
              <label>Base Zerada</label>
              <input
                type="radio"
                name="backup"
                value="Não será feita instalação de SERVIDOR"
                onChange={(e) => setBackup(e.target.value)}
              />
              <label>Não será feita instalação de SERVIDOR</label>
            </div>

            <div className="pergunta">
              <p>A loja utiliza Mobile?</p>

              <input
                type="radio"
                name="mobile"
                value="Sim"
                onChange={(e) => setMobile(e.target.value)}
              />
              <label>Sim</label>
              <input
                type="radio"
                name="mobile"
                value="Não"
                onChange={(e) => setMobile(e.target.value)}
              />
              <label>Não</label>
            </div>

            <div className="pergunta">
              <p>A loja utiliza Auto Atendimento ONE?</p>

              <input
                type="radio"
                name="aa"
                value="Sim"
                onChange={(e) => setAA(e.target.value)}
              />
              <label>Sim</label>
              <input
                type="radio"
                name="aa"
                value="Não"
                onChange={(e) => setAA(e.target.value)}
              />
              <label>Não</label>
            </div>

            <div className="pergunta">
              <p>Loja está parada?</p>

              <input
                type="radio"
                name="lojaParada"
                value="Sim"
                onChange={(e) => setLojaParada(e.target.value)}
              />
              <label>Sim</label>
              <input
                type="radio"
                name="lojaParada"
                value="Não"
                onChange={(e) => setLojaParada(e.target.value)}
              />
              <label>Não</label>
            </div>

            <div className="pergunta">
              <p>Quantos PDVs a loja possui?</p>
              <input
                type="number"
                name="quantidadePDVs"
                min="0"
                onChange={(e) => setQuantidadePDVs(e.target.value)}
                placeholder="Informe a quantidade"
              />
            </div>

            <div className="pergunta">
              <p>Quantos PDVs serão instalados?</p>
              <input
                type="number"
                name="quantidadePDVsInstalados"
                min="0"
                onChange={(e) => setQuantidadePDVsInstalados(e.target.value)}
                placeholder="Informe a quantidade"
              />
            </div>

            <div className="pergunta">
              <p>Qual o número do PDV que será instalado?</p>
              <input
                type="text"
                name="numeroPDVInstalado"
                onChange={(e) => setNumeroPDVInstalado(e.target.value)}
                placeholder="Informe o número"
              />
            </div>

            <div className="pergunta">
              <p>Qual é o emissor de cupom utilizado (S@T, NFCE, ECF)?</p>
              <input
                type="radio"
                name="emissorCupom"
                value="S@T"
                onChange={(e) => setEmissorCupom(e.target.value)}
              />
              <label>S@T</label>
              <input
                type="radio"
                name="emissorCupom"
                value="NFCE"
                onChange={(e) => setEmissorCupom(e.target.value)}
              />
              <label>NFCE</label>
              <input
                type="radio"
                name="emissorCupom"
                value="ECF"
                onChange={(e) => setEmissorCupom(e.target.value)}
              />
              <label>ECF</label>
            </div>

            <div className="pergunta">
              <p>Qual é a marca e modelo do emissor de cupom (DANFE)?</p>
              <input
                type="text"
                name="marcaModeloEmissorCupom"
                onChange={(e) => setMarcaModeloEmissorCupom(e.target.value)}
                placeholder="Informe a marca e modelo"
              />
            </div>

            <div className="pergunta">
              <p>Impressoras Remotas?</p>
              <input
                type="radio"
                name="impressorasRemotas"
                value="Sim"
                onChange={(e) => setImpressorasRemotas(e.target.value)}
              />
              <label>Sim</label>
              <input
                type="radio"
                name="impressorasRemotas"
                value="Não"
                onChange={(e) => setImpressorasRemotas(e.target.value)}
              />
              <label>Não</label>
              <br />
              {impressorasRemotas === "Sim" && (
                <input
                  type="text"
                  name="marcaModeloImpressorasRemotas"
                  onChange={(e) =>
                    setMarcaModeloImpressorasRemotas(e.target.value)
                  }
                  placeholder="Informe a marca e modelo"
                />
              )}
            </div>

            <div className="pergunta">
              <p>Loja tem PIN PAD?</p>
              <input
                type="radio"
                name="pinPad"
                value="Sim"
                onChange={(e) => setPinPad(e.target.value)}
              />
              <label>Sim</label>
              <input
                type="radio"
                name="pinPad"
                value="Não"
                onChange={(e) => setPinPad(e.target.value)}
              />
              <label>Não</label>
              <br />
              {pinPad === "Sim" && (
                <input
                  type="text"
                  name="marcaModeloPinPad"
                  onChange={(e) => setMarcaModeloPinPad(e.target.value)}
                  placeholder="Informe a marca e modelo"
                />
              )}
            </div>

            <div className="pergunta">
              <p>Existe mais algum equipamento conectado à máquina?</p>
              <input
                type="radio"
                name="equipamentoConectado"
                value="Sim"
                onChange={(e) => setEquipamentoConectado(e.target.value)}
              />
              <label>Sim</label>
              <input
                type="radio"
                name="equipamentoConectado"
                value="Não"
                onChange={(e) => setEquipamentoConectado(e.target.value)}
              />
              <label>Não</label>
              <br />
              {equipamentoConectado === "Sim" && (
                <input
                  type="text"
                  name="marcaModeloEquipamentoConectado"
                  onChange={(e) =>
                    setMarcaModeloEquipamentoConectado(e.target.value)
                  }
                  placeholder="Informe a marca e modelo"
                />
              )}
            </div>
             <br />

            <button type="button" onClick={handleCopyAnswers}>
              Copiar Respostas
            </button>
            <br />

            <button onClick={() => setModalVisible(false)}>Fechar</button>
            
          </form>
        </Modal>
      )}

      {envioInformacaoModalVisible && (
        <Modal
          isOpen={envioInformacaoModalVisible}
          onRequestClose={() => setEnvioInformacaoModalVisible(false)}
          contentLabel="Perguntas"
          ariaHideApp={false}
        >
          <div className={style.modal}>
            <div style={{ "font-family": "Calibri sans-serif"}}>
              <span
                className="close"
                onClick={() => setEnvioInformacaoModalVisible(false)}
              >
                &times;
              </span>
              <h2>SERVIÇO FORA DE ESCOPO - LINX</h2>
              <p style={{ "font-size": "11pt"}}>
                Prezado Cliente,
                <br />
                Com base no catálogo de serviços fora do escopo padrão de
                suporte, informamos que será cobrada uma taxa pelo serviço
                citado abaixo. A taxa será faturada no próximo fechamento do
                período e será enviado um boleto separado. Estando de acordo,
                gentileza responder esse e-mail para que possamos dar
                continuidade ao processo de agendamento do procedimento.
              </p>

              <h3>INFORMAÇÕES DO CLIENTE:</h3>
              <div
              style={{ "font-size": "11pt"}}
              >
              <p ><strong>TP: </strong>{tpValue}</p>
              <p><strong> NOME COMPLETO: </strong></p>
              <p><strong>CPF: </strong></p>
              <p><strong>CARGO: </strong></p>
              <p><strong>CNPJ: </strong></p>
              <p><strong>RAZÃO SOCIAL: </strong></p>
              <p><strong>NOME LOJA/REDE: </strong></p>
              <p><strong>ENDEREÇO: </strong></p>
              <p><strong>TELEFONE: </strong></p>
              </div>

              <h3>Descrição do Serviço Fora do Escopo</h3>
              <table
                style={{
                  "width": "100%",
                  "border-collapse": "collapse",
                  "margin-top": "15px",
                  "font-size": "11pt",
                }}
              >
                <thead>
                  <tr>
                    <th>Descrição do Serviço</th>
                    <th>Valor</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.label}</td>
                      <td>R$: {item.value}</td>
                      <td>{item.quantity}</td>
                      <td>R$: {item.value * item.quantity}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className={style.total} colSpan="3">
                      Total:
                    </td>
                    <td className={style.total}>R$: {total}</td>
                  </tr>
                </tbody>
              </table>

              <h3>PRÉ-REQUISITOS:</h3>
              <div style={{ "font-size": "11pt"}}>
              <p>
                Consulte os requisitos mínimos de equipamentos em:{" "}
                <a href="https://share.linx.com.br/pages/viewpage.action?pageId=334144784">
                  https://share.linx.com.br/pages/viewpage.action?pageId=334144784
                </a>
              </p>

              <p>
                Segue o Linx Share de Boas Práticas do nosso Suporte:{" "}
                <a href="https://share.linx.com.br/pages/viewpage.action?pageId=65923790">
                  https://share.linx.com.br/pages/viewpage.action?pageId=65923790
                </a>
              </p>

              <p>
                O serviço será feito por conexão através do Software de Acesso
                Remoto.
                <br />
                “A Linx reserva-se no direito de preservar o bom funcionamento
                do sistema, que envolve atender aos requisitos mínimos de
                equipamento e integração com periféricos, desde que estes
                estejam em perfeito estado de funcionamento e sob a adequada
                configuração fornecida pelo fabricante e pela Equipe Linx
                Degust”.
              </p>

              <p>
                É obrigatório o preenchimento de todos os dados para autorizar o
                serviço. Caso o email não seja respondido com todos os dados do
                responsável dentro do prazo determinado, o chamado será
                cancelado automaticamente.
              </p>

              <p>
                Este termo de aceite é valido por 72 horas, caso não seja
                respondido dentro do prazo o chamado será cancelado
                automaticamente.
              </p>

              <p>Ficamos no aguardo para darmos continuidade.</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
