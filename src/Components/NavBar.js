import React from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [show, handleShow] = React.useState(false);
  const history = useHistory();

  const transitionNavBar = () =>
    window.scrollY > 100 ? handleShow(true) : handleShow(false);

  React.useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix_Logo"
      />
      <img
        onClick={() => history.push("/profile")}
        className="nav_avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
}
