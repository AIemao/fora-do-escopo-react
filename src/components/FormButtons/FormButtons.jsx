import style from "./FormButtons.module.css"

export default function FormButtons({
  handleOpenModal,
  handleReset,
  handleOpenEnvioInformacaoModal,
}) {
  return (
    <div className={style.container_buttons}>
      <button
        type="submit"
        id="processar"
        onClick={handleOpenModal}
        className={style.button_process}
      >
        Processar
      </button>
      <button
        type="button"
        id="reset"
        onClick={handleReset}
        className={style.button_reset}

      >
        Reset
      </button>

      <button
        type="button"
        onClick={handleOpenEnvioInformacaoModal}
        className={style.button_send}
      >
        Envio de Informação
      </button>
    </div>
  );
}
