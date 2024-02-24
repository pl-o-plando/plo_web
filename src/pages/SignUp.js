import "../styles/SignIn.css";

const SignUp = () => {
  return (
    <div className="wrapper">
      <form className="container sign-up">
        <div className="text">Sign up</div>
        <input placeholder="nickname" type="name" />
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
        <input placeholder="password" type="password" />
        <button className="btn" type="submit">
          Sign up
        </button>
      </form>
      <div className="container sign-in2">
        <div className="logo">pl&o</div>
        <div className="mention">
          Thank you for <br />
          signing up
        </div>
      </div>
    </div>
  );
};
export default SignUp;
