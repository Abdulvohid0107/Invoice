import "./side-bar.scss"
import shape from "../../assets/images/shape.svg"
import userIcon from "../../assets/icons/usericon.png"

export const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__img-wrapper">
        <img src={shape} alt="Creative shape" />
      </div>
      <div className="side-bar__user-img-wrapper">
        <img className="side-bar__user-img" src={userIcon} alt="User" />
      </div>
    </div>
  )
}