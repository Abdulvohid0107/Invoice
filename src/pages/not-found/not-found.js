import { Button } from "../../components"
import "./not-found.scss"


export const NotFound = () => {
  return (
    <div className="not-found">
      <p className="not-found__text">This kind of page doesn't exist!</p>
      <p className="not-found__error-status">404</p>
      <Button to={"/"} className="not-found--button">Back to main page</Button>
    </div>
  )
}