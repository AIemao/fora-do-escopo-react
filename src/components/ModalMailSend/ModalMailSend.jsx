import Modal from "react-modal";
import style from "./ModalMailSend.module.css";

export default function ModalMailSend({
  envioInformacaoModalVisible,
  setEnvioInformacaoModalVisible,
  tpValue,
  items,
  total,
}) {
  return (
    <Modal
      isOpen={envioInformacaoModalVisible}
      onRequestClose={() => setEnvioInformacaoModalVisible(false)}
      contentLabel="Perguntas"
      ariaHideApp={false}
    >
      <div className={style.modal}>
        <span
          className={style.close}
          onClick={() => setEnvioInformacaoModalVisible(false)}
        >
          &times;
        </span>
        <div id="container_text" >
          <h2>SERVIÇO FORA DE ESCOPO - LINX</h2>

          <p className={style.base_text}>
            Prezado Cliente,
            <br />
            Com base no catálogo de serviços fora do escopo padrão de suporte,
            informamos que será cobrada uma taxa pelo serviço citado abaixo. A
            taxa será faturada no próximo fechamento do período e será enviado
            um boleto separado. Estando de acordo, gentileza responder esse
            e-mail para que possamos dar continuidade ao processo de agendamento
            do procedimento.
          </p>

          <h3 className={style.title}>INFORMAÇÕES DO CLIENTE:</h3>
          <div className={style.client_info}>
            <p>
              TP:
              {tpValue}
            </p>
            <p>
              NOME COMPLETO:
            </p>
            <p>
              CPF:
            </p>
            <p>
              CARGO:
            </p>
            <p>
              CNPJ:
            </p>
            <p>
              RAZÃO SOCIAL:
            </p>
            <p>
              NOME LOJA/REDE:
            </p>
            <p>
              ENDEREÇO:
            </p>
            <p>
              TELEFONE:
            </p>
          </div>

          <h3 className={style.title}>Descrição do Serviço Fora do Escopo</h3>
          <table
            style={{
              width: "100%",
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
              {items.map((item) => item.quantity > 0 && (
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

          <h3 className={style.title}>PRÉ-REQUISITOS:</h3>
          <div style={{ "font-size": "11pt" }}>
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
              “A Linx reserva-se no direito de preservar o bom funcionamento do
              sistema, que envolve atender aos requisitos mínimos de equipamento
              e integração com periféricos, desde que estes estejam em perfeito
              estado de funcionamento e sob a adequada configuração fornecida
              pelo fabricante e pela Equipe Linx Degust”.
            </p>

            <p>
              É obrigatório o preenchimento de todos os dados para autorizar o
              serviço. Caso o email não seja respondido com todos os dados do
              responsável dentro do prazo determinado, o chamado será cancelado
              automaticamente.
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
  );
}
