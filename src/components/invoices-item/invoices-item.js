import { InvoiceContentWrapper } from "../invoice-content-wrapper/invoice-content-wrapper";
import "./invoices-item.scss";

export const InvoiceItem = (props) => {

  const {invoice: { to, price, id, paid, dueDate}} = props
  // userID, paid, email, dueDate, term, createdDate, description,

  return (
    <li className="invoices-item">
      <InvoiceContentWrapper>
        <div className="invoices-item__info-wrapper">
          <h3 className="invoices-item__id">{id}</h3>
          <p className="invoices-item__due-date">Due {dueDate}</p>
          <p className="invoices-item__to">{to}</p>
        </div>
        <div className="invoices-item__money-wrapper">
          <h3 className="invoice-item__money">£{price}</h3>
          <p className="invoice-item__paid-status">{paid? "Paid" : "Pending"}</p>
        </div>
      </InvoiceContentWrapper>
    </li>
  );
};