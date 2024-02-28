import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const goSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="sign-container">
      <form className="sign-screen gap-16">
        <div className="text-5xl font-extrabold text-[#976ec2] mb-10">
          Sign in
        </div>
        <input placeholder="email" type="email" className="sign-input" />
        <input placeholder="password" type="password" className="sign-input" />
        <button className="sign-btn" type="submit">
          Sign in
        </button>
      </form>

      <div className="sign-screen bg-purple bg-[#e5d1fa] gap-14">
        <div
          className="text-7xl font-extrabold italic text-[#976ec2]"
          style={{ WebkitTextStroke: "2px #FFF" }}
        >
          pl&o
        </div>
        <button className="sign-btn" onClick={goSignUp}>
          sign up
        </button>
      </div>
    </div>
  );
};
export default SignIn;
