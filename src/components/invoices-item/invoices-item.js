import { Link } from "react-router-dom";
import { InvoiceContentWrapper } from "../invoice-content-wrapper";
import { PaidStatus } from "../paid-status";
import "./invoices-item.scss";

export const InvoiceItem = (props) => {
  const {
    invoice: { to, price, id, paid, due_date },
  } = props;
  // userID, paid, email, due_date, term, createdDate, description,

  return (
    <li className="invoices-item">
      <Link to={`/view-invoice/${id}`}>
        <InvoiceContentWrapper className="invoice-item__content-wrapper">
          <div className="invoices-item__info-wrapper">
            <h3 className="invoices-item__id">
              <span className="invoices-item__id-span">#</span>
              {id?.slice(0, 6)}
            </h3>
            <p className="invoices-item__due-date">
              <span className="invoices-item__due">Due</span>
              {due_date?.slice(0, 10)}
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
