import "./side-bar.scss"
import shape from "../../assets/images/shape.svg"
import userIcon from "../../assets/icons/usericon.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import brat from "../../assets/images/brat.png"

export const SideBar = () => {

  const user = useSelector((state) => state.user.user)

  return (
    <div className="side-bar">
      <div className="side-bar__img-wrapper">
        <img className="side-bar__top-img" src={shape} alt="Creative shape" />
      </div>
      <div className={!user ?  "side-bar__user-img-wrapper" : "side-bar__user-img-wrapper--brat"}>
        {!user ? <Link to="/login"><img className="side-bar__user-img" src={userIcon} alt="User" /></Link> : <img  src={brat} alt="User" />}
      </div>
    </div>
  )
}