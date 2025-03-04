import Modal from "react-modal";
import style from "./ModalConfigInfo.module.css"

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
  setEmissorCupom,
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
        <div>
          <strong>A instalação será realizada com Backup ou Base Zerada?</strong>

          <div className={style.container_question}>
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

        <div >
          <strong>A loja utiliza Mobile?</strong>

          <div className={style.container_question}>
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

        <div >
          <strong>A loja utiliza Auto Atendimento ONE?</strong>

          <div className={style.container_question}>
            <div>
              <input
                type="radio"
                name="aa"
                value="Sim"
                onChange={(e) => setAA(e.target.value)}
              />
              <label>Sim</label>
            </div>
            <div>
            </div>
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
          <strong>Loja está parada?</strong>

          <div className={style.container_question}>
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
          <strong>Quantos PDVs a loja possui?</strong>
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
          <strong>Quantos PDVs serão instalados?</strong>
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
          <strong>Qual o número do PDV que será instalado?</strong>
          <input
            type="text"
            name="numeroPDVInstalado"
            onChange={(e) => setNumeroPDVInstalado(e.target.value)}
            placeholder="Informe o número"
            className={style.input_number}
          />
        </div>

        <div className={style.container_question}>
          <strong>Qual é o emissor de cupom utilizado (S@T, NFCE, ECF)?</strong>
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
        </div>

        <div className={style.container_question}>
          <strong>Qual é a marca e modelo do emissor de cupom (DANFE)?</strong>
          <input
            type="text"
            name="marcaModeloEmissorCupom"
            onChange={(e) => setMarcaModeloEmissorCupom(e.target.value)}
            placeholder="Informe a marca e modelo"
            className={style.input_number}
          />
        </div>

        <div className={style.container_question}>
          <strong>Impressoras Remotas?</strong>
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
          <br />
          {impressorasRemotas === "Sim" && (
            <input
              type="text"
              name="marcaModeloImpressorasRemotas"
              onChange={(e) => setMarcaModeloImpressorasRemotas(e.target.value)}
              placeholder="Informe a marca e modelo"
            />
          )}
        </div>

        <div className={style.container_question}>
          <strong>Loja tem PIN PAD?</strong>
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

        <div className={style.container_question}>
          <strong>Existe mais algum equipamento conectado à máquina?</strong>
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


        <button type="button" onClick={handleCopyAnswers} className={style.button_copy}>
          Copiar Respostas
        </button>
        <br />

        <button onClick={() => setModalVisible(false)} className={style.button_close}>Fechar</button>
      </form>
    </Modal>
  );
}
