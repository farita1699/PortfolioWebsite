import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to="/" href="#intro" className="logo">
            Jerry Wan
          </Link>
          <div className="itemContainer">
            <Person className="icon" />
            <span>647 237 1699</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>wanj21@mcmaster.ca</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
