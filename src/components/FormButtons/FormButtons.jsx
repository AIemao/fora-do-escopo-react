import style from "./FormButtons.modules.css?inline";

export default function FormButtons({
  handleOpenModal,
  handleReset,
  handleOpenEnvioInformacaoModal,
}) {
  return (
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
        className={style.sendButton}
        onClick={handleOpenEnvioInformacaoModal}
      >
        Envio de Informação
      </button>
    </div>
  );
}
