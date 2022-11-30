import "./invoice-content-wrapper.scss";

export const InvoiceContentWrapper = ({ children, className = "" }) => {
  return (
    <div className={"invoice-content-wrapper " + className}>{children}</div>
  );
};
