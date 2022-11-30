import { Link } from "react-router-dom";
import "./go-back.scss";

export const GoBack = ({to}) => {
  return <Link to={to} className="go-back__link">Go Back</Link>;
};
