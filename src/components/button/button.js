import "./button.scss"

export const Button = ({children, className = ""}) => {
  return (
    <button className={"button " + className}><span className="button__text">{children}</span></button>
  )
}