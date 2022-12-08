import React from "react";
import { Link } from "react-router-dom";
const WelcomePage = () => {
  return (
    <>
      <div className="welcome-page-parent">
        <div className="welcome-img">
          <img
            src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="welcome-title">
          <h1>Welcome</h1>
          <p>
            We 're glad you are here!Enjoy your free prototype mode with{" "}
            <a href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-signupflow&utm_medium=figma-samples">
              Anima
            </a>
          </p>
          <Link className="main-btn" to="/signup">Get Started</Link>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
