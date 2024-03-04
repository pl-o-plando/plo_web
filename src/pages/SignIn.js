import "../styles/SignIn.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const goSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="wrapper">
      <form className="container sign-in">
        <div className="text">Sign in</div>
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
        <button className="btn" type="submit">
          Sign in
        </button>
      </form>

      <div className="container sign-in2">
        <div className="logo">pl&o</div>
        <button className="btn" onClick={goSignUp}>
          sign up
        </button>
      </div>
    </div>
  );
};
export default SignIn;
