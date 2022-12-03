import "./no-invoice.scss";

export const NoInvoice = () => {
  return (
    <div className="no-invoice">
      <p className="no-invoice__title">There is nothing here</p>
      <p className="no-invoice__text">
        Create an invoice by clicking the <strong>New Invoice</strong> button and get started
      </p>
    </div>
  );
};
