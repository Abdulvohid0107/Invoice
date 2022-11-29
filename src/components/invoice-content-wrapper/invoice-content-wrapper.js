import "./invoice-content-wrapper"

export const InvoiceContentWrapper = ({children, className = ""}) => {
  return (
    <div className={"invoice-content-wrapper " + className}>{children}</div>
  )
}