import style from "./TpInfo.module.css";

export default function TpInfo({ tpValue, setTpValue }) {
  return (
    <fieldset id="fieldset" className={style.fieldset}>
      <legend className={style.legend}>Preencha os campos:</legend>

      <div>
        <label htmlFor="tp" className={style.fieldset_label}>TP:</label>
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
        ⚠️
        <div>
          <strong>Importante!</strong>
          <p>
            Caso seja SERVIDOR SEM BACKUP - Oriente a loja a verificar a
            tributação antes de iniciar a instalação.
          </p>
          <p>
            Periféricos devidamente instalados e se comunicando com o Windows.
          </p>
        </div>
      </div>
    </fieldset>
  );
}
