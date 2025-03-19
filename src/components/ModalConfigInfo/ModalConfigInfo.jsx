import Modal from "react-modal";
import style from "./ModalConfigInfo.module.css";

export default function ModalConfigInfo({
  modalVisible,
  setModalVisible,
  setBackup,
  setMobile,
  setAA,
  setLojaParada,
  setQuantidadePDVs,
  setQuantidadePDVsInstalados,
  setNumeroPDVInstalado,
  emissorCupom,
  setEmissorCupom,
  setSatCode,
  setMarcaModeloEmissorCupom,
  setImpressorasRemotas,
  setMarcaModeloImpressorasRemotas,
  setPinPad,
  setMarcaModeloPinPad,
  setEquipamentoConectado,
  setMarcaModeloEquipamentoConectado,
  impressorasRemotas,
  pinPad,
  equipamentoConectado,
  handleCopyAnswers,
}) {
  return (
    <Modal
      isOpen={modalVisible}
      onRequestClose={() => setModalVisible(false)}
      contentLabel="Perguntas"
      ariaHideApp={false}
    >
      {/* Conteúdo do modal */}
      <h2>Preencha as perguntas:</h2>
      <form>
        <div className={style.container_question}>
          <strong>
            1- A instalação será realizada em um Terminal ou Servidor? Se for servidor, com backup ou sem dados?
          </strong>

          <div className={style.container_input}>
            <label>
              <input
                type="radio"
                name="backup"
                value="Backup"
                onChange={(e) => setBackup(e.target.value)}
              />
              Backup
            </label>
            <label>
              <input
                type="radio"
                name="backup"
                value="Base Zerada"
                onChange={(e) => setBackup(e.target.value)}
              />
              Base Zerada
            </label>
            <label>
              <input
                type="radio"
                name="backup"
                value="Não será feita instalação de SERVIDOR"
                onChange={(e) => setBackup(e.target.value)}
              />
              Não será feita instalação de SERVIDOR
            </label>
          </div>
        </div>

        <div className={style.container_question}>
          <strong>2- A loja utiliza Mobile?</strong>

          <div className={style.container_input}>
            <label>
              <input
                type="radio"
                name="mobile"
                value="Sim"
                onChange={(e) => setMobile(e.target.value)}
              />
              Sim
            </label>

            <label>
              <input
                type="radio"
                name="mobile"
                value="Não"
                onChange={(e) => setMobile(e.target.value)}
              />
              Não
            </label>
          </div>
        </div>

        <div className={style.container_question}>
          <strong>3- A loja utiliza Auto Atendimento ONE?</strong>

          <div className={style.container_input}>
            <div>
              <input
                type="radio"
                name="aa"
                value="Sim"
                onChange={(e) => setAA(e.target.value)}
              />
              <label>Sim</label>
            </div>
            <div></div>
            <div>
              <input
                type="radio"
                name="aa"
                value="Não"
                onChange={(e) => setAA(e.target.value)}
              />
              <label>Não</label>
            </div>
          </div>
        </div>

        <div className={style.container_question}>
          <strong>4- Loja está parada?</strong>

          <div className={style.container_input}>
            <div>
              <input
                type="radio"
                name="lojaParada"
                value="Sim"
                onChange={(e) => setLojaParada(e.target.value)}
              />
              <label>Sim</label>
            </div>
            <div>
              <input
                type="radio"
                name="lojaParada"
                value="Não"
                onChange={(e) => setLojaParada(e.target.value)}
              />
              <label>Não</label>
            </div>
          </div>
        </div>

        <div className={style.container_question}>
          <strong>5- Quantos PDVs a loja possui?</strong>
          <input
            type="number"
            name="quantidadePDVs"
            min="0"
            onChange={(e) => setQuantidadePDVs(e.target.value)}
            placeholder="Informe a quantidade"
            className={style.input_number}
          />
        </div>

        <div className={style.container_question}>
          <strong>6- Quantos PDVs serão instalados?</strong>
          <input
            type="number"
            name="quantidadePDVsInstalados"
            min="0"
            onChange={(e) => setQuantidadePDVsInstalados(e.target.value)}
            placeholder="Informe a quantidade"
            className={style.input_number}
          />
        </div>

        <div className={style.container_question}>
          <strong>7- Qual o número do PDV que será instalado?</strong>
          <input
            type="text"
            name="numeroPDVInstalado"
            onChange={(e) => setNumeroPDVInstalado(e.target.value)}
            placeholder="Informe o número"
            className={style.input_number}
          />
        </div>

        <div className={style.container_question}>
          <strong>
            8- Qual é o emissor de cupom utilizado (S@T, NFCE, ECF)?
          </strong>

          <div className={style.container_input}>
            <div>
              <input
                type="radio"
                name="emissorCupom"
                value="S@T"
                onChange={(e) => setEmissorCupom(e.target.value)}
              />
              <label>S@T</label>
            </div>
            <div>
              <input
                type="radio"
                name="emissorCupom"
                value="NFCE"
                onChange={(e) => setEmissorCupom(e.target.value)}
              />
              <label>NFC-e</label>
            </div>
            <div>
              <input
                type="radio"
                name="emissorCupom"
                value="ECF"
                onChange={(e) => setEmissorCupom(e.target.value)}
              />
              <label>ECF</label>
            </div>

            {emissorCupom === "S@T" && (
              <input
                type="text"
                name="satCode"
                onChange={(e) => setSatCode(e.target.value)}
                placeholder="Informe o código de ativação."
              />
            )}
          </div>
        </div>

        <div className={style.container_question}>
          <strong>
            9- Qual é a marca e modelo da impressora de Cupom Fiscal (DANFE)?
          </strong>
          <input
            type="text"
            name="marcaModeloEmissorCupom"
            onChange={(e) => setMarcaModeloEmissorCupom(e.target.value)}
            placeholder="Informe a marca e modelo"
            className={style.input_number}
          />
        </div>

        <div className={style.container_question}>
          <strong>10- Impressoras Remotas?</strong>

          <div className={style.container_input}>
            <div>
              <input
                type="radio"
                name="impressorasRemotas"
                value="Sim"
                onChange={(e) => setImpressorasRemotas(e.target.value)}
              />
              <label>Sim</label>
            </div>
            <div>
              <input
                type="radio"
                name="impressorasRemotas"
                value="Não"
                onChange={(e) => setImpressorasRemotas(e.target.value)}
              />
              <label>Não</label>
            </div>

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
        </div>

        <div className={style.container_question}>
          <strong>11- Loja tem PIN PAD?</strong>

          <div className={style.container_input}>
            <div>
              <input
                type="radio"
                name="pinPad"
                value="Sim"
                onChange={(e) => setPinPad(e.target.value)}
              />
              <label>Sim</label>
            </div>
            <div>
              <input
                type="radio"
                name="pinPad"
                value="Não"
                onChange={(e) => setPinPad(e.target.value)}
              />
              <label>Não</label>
            </div>
            {pinPad === "Sim" && (
              <input
                type="text"
                name="marcaModeloPinPad"
                onChange={(e) => setMarcaModeloPinPad(e.target.value)}
                placeholder="Informe a marca e modelo"
              />
            )}
          </div>
        </div>

        <div className={style.container_question}>
          <strong>
            12- Existe mais algum equipamento conectado à máquina?
          </strong>

          <div className={style.container_input}>
            <div>
              <input
                type="radio"
                name="equipamentoConectado"
                value="Sim"
                onChange={(e) => setEquipamentoConectado(e.target.value)}
              />
              <label>Sim</label>
            </div>
            <div>
              <input
                type="radio"
                name="equipamentoConectado"
                value="Não"
                onChange={(e) => setEquipamentoConectado(e.target.value)}
              />
              <label>Não</label>
            </div>

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
        </div>

        <button
          type="button"
          onClick={handleCopyAnswers}
          className={style.button_copy}
        >
          Copiar Respostas
        </button>
        <br />

        <button
          onClick={() => setModalVisible(false)}
          className={style.button_close}
        >
          Fechar
        </button>
      </form>
    </Modal>
  );
}
