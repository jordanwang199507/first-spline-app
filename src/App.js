import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./assets/logo.svg";
import Laptop from "./assets/icon-laptop.svg";
import Twitter from "./assets/icon-twitter.svg";
import Youtube from "./assets/icon-youtube.svg";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <Spline
        className="spline"
        scene="https://prod.spline.design/TGf0NlfJeLiCky2X/scene.splinecode"
      />
      <div className="content">
        <div className="menu">
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </div>
        <h1>Collaborate with people</h1>
        <p>
          Bring your team together and build your community by using our
          cross-platform app that lets you collaborate via chat, voice and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.
        </p>
        <button>
          <img src={Laptop} alt="Download" /> Download for Mac
        </button>
      </div>
      <div className="social">
        <div></div>
        <img src={Twitter} alt="Twitter" />

        <img src={Youtube} alt="Youtube" />
      </div>
    </div>
  );
};

export default App;
