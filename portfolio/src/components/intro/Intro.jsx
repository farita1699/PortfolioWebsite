import "./intro.scss";
// import { init } from "ityped";
import {SentimentSatisfiedAlt} from "@material-ui/icons";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <a href="#portfolio">
        <img src="assets/down.png" alt="" />
      </a>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Profile_Pic_New.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>About Me</h1>
          <h2>Welcome to my portfolio website! My name is Jerry Wan. I am
             a second year student in McMaster University. I major in 
             biomedical engineering with a focus in mechatronics. In my spare time, 
             I like do things like web development and game development. 
             This portfolio website is where I show you my projects.
             </h2>
             <SentimentSatisfiedAlt className="icon" />
        </div>
      </div>
    </div>
  );
}
