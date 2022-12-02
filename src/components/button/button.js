import { Link } from "react-router-dom";
import "./button.scss"

export const Button = ({children, className = "", to, type}) => {
  if (to)
  return (
      <Link to={to} className={"button " + className}><span className="button__text">{children}</span></Link>
    );
    return (
      <button type={type} className={"button " + className}><span className="button__text">{children}</span></button>     
  )
}