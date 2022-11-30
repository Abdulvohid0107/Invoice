import { useSelector } from "react-redux";
import { InvoiceItem } from "../invoices-item/invoices-item";
import "./invoice-list.scss";

export const InvoiceList = () => {
  const { invoicesList } = useSelector((state) => state.invoices);
  return (
    <>
      <h2 className="visually-hidden">List of invoices</h2>
      <ul className="invoice-list">
        {invoicesList?.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </ul>
    </>
  );
};
