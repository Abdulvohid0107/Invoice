import { Link } from "react-router-dom";
import { InvoiceContentWrapper } from "../invoice-content-wrapper";
import { PaidStatus } from "../paid-status";
import "./invoices-item.scss";

export const InvoiceItem = (props) => {
  const {
    invoice: { to, price, id, paid, dueDate },
  } = props;
  // userID, paid, email, dueDate, term, createdDate, description,

  return (
    <li className="invoices-item">
      <Link to={`/view-invoice/${id}`}>
        <InvoiceContentWrapper>
          <div className="invoices-item__info-wrapper">
            <h3 className="invoices-item__id">
              <span className="invoices-item__id-span">#</span>
              {id}
            </h3>
            <p className="invoices-item__due-date">
              <span className="invoices-item__due">Due</span>
              {dueDate}
            </p>
            <p className="invoices-item__to">{to}</p>
          </div>
          <div className="invoices-item__money-wrapper">
            <h3 className="invoice-item__money">£ {price}</h3>
            <PaidStatus>{paid ? "Paid" : "Pending"}</PaidStatus>
          </div>
        </InvoiceContentWrapper>
      </Link>
    </li>
  );
};
