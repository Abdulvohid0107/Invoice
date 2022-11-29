import "./invoice-content-wrapper.scss"

export const InvoiceContentWrapper = ({children, className = ""}) => {
  return (
    <div className={"invoice-content-wrapper__invoice " + className}>{children}</div>
  )
}