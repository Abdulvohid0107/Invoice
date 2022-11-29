import "./error-message.scss"

export const ErrorMessage = ({children}) => {
  return (
    <div className="error">{children}</div>
  )
}