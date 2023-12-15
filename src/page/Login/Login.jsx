import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import "./Login.scss";
import myImage from "./Screenshot_9.png";

const Login = () => {
  return (
    <>
      <Meta title="Login * Instagram" />
      <section className="login-section">
        <div className="container">
          <div className="section-left">
            <img src={myImage} alt="" />
          </div>
          <div className="section-right">
            <div className="card">
              <div className="card-body">
                <img
                  src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration.png"
                  alt=""
                />
                <form action="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number, username, or email"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                  />
                  <button className="btn">Log in</button>
                </form>
                <p className="border-text">or</p>
                <Link>
                  <span></span>
                  <span>Log in with Facebook </span>
                </Link>
                <Link>Forgot password?</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p>Don't have an account?</p> <Link>Sign up</Link>
              </div>
            </div>
            <p>Get the app.</p>
            <div className="logo-img">
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                alt=""
              />
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
