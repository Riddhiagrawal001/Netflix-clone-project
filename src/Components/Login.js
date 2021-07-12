import React from "react";
import "./loginScreen.css";
import SignInScreen from "./SignInScreen";
import NetflixLogo from "../assests/netflix_logo.png";

function Login() {
  const [signIn, setsignIn] = React.useState(false);
  return (
    <div className="login">
      <div className="login_screen_background">
        <img className="login_screen_logo" src={NetflixLogo} alt="" />
        <button className="login_screen_button" onClick={() => setsignIn(true)}>
          Sign In
        </button>
        <div className="login_screen_gradient" />
        <div className="login_screen_body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programs and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="login_screen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="login_screen_getStarted"
                    onClick={() => setsignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
