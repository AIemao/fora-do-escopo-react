import style from "./ServiceForm.module.css";

export default function ServiceForm({ items, handleQuantityChange, total }) {
  return (
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
            className={item.id % 2 === 0 ? style.tabledanger : style.tablelight}
          >
            <td>
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
  );
}
