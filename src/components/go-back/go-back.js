import { Link } from "react-router-dom";
import "./go-back.scss";

export const GoBack = ({to, className = ""}) => {
  return <Link to={to} className={"go-back__link " + className}>Go Back</Link>;
};
