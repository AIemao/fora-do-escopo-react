import FormButtons from "../FormButtons/FormButtons";
import style from "./ServiceForm.module.css";

export default function ServiceForm({
  items,
  handleQuantityChange,
  total,
  handleOpenModal,
  handleReset,
  handleOpenEnvioInformacaoModal,
}) {
  return (
    <div className={style.grid_container}>
      <div className={style.grid_container_header}>
        <h3>Descrição do Serviço Fora do Escopo</h3>
        <div>Valor</div>
        <div>Quantidade</div>
        <div>Total</div>
      </div>

      <div>
        {items.map((item) => (
          <div key={item.id} className={style.grid_container_body}>
            <div>
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
            </div>

            <div className={style.grid_product_values}>R$: {item.value}</div>
            <div className={style.grid_product_values}>
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
            </div>
            <div className={style.grid_product_values}>
              R$: {item.value * item.quantity}
            </div>
          </div>
        ))}
        <p className={style.text_alert}> *As horas e valor total do treinamento são consolidados no final do treinamento.</p>
        <div className={style.container_total_price}>
          <p>Total geral:</p>

          <input value={total} type="number" readOnly disabled />
        </div>
      </div>

      <FormButtons
        handleOpenModal={handleOpenModal}
        handleReset={handleReset}
        handleOpenEnvioInformacaoModal={handleOpenEnvioInformacaoModal}
      />
    </div>
  );
}
