import { Link } from "react-router-dom";
import "./button.scss"

export const Button = ({children, className = "", to}) => {
  if (to)
  return (
      <Link className={"button " + className}><span className="button__text">{children}</span></Link>
    );
    return (
      <button className={"button " + className}><span className="button__text">{children}</span></button>     
  )
}