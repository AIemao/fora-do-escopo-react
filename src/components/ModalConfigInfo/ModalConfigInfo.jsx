import Modal from "react-modal";

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
              onChange={(e) => setMarcaModeloImpressorasRemotas(e.target.value)}
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
  );
}
