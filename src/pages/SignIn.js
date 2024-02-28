import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const goSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="w-[900px] h-[700px] flex flex-row my-auto">
      {/* <form className="container sign-in"> */}
      <form className="flex flex-col w-2/4 h-full justify-center items-center border border-solid border-[#976ec2] gap-16">
        <div className="text-5xl font-extrabold text-[#976ec2] mb-10">
          Sign in
        </div>
        <input
          placeholder="email"
          type="email"
          className="w-72 h-12 border border-1 border-solid border-[#976ec2] rounded-xl text-sm focus:outline-none"
        />
        <input
          placeholder="password"
          type="password"
          className="w-72 h-12 border border-1 border-solid border-purple-600 rounded-xl text-sm focus:outline-none"
        />
        <button
          className="w-72 h-12 rounded-xl bg-[#976ec2] text-white text-lg font-semibold"
          type="submit"
        >
          Sign in
        </button>
      </form>

      <div className="flex flex-col w-2/4 h-full justify-center items-center border border-solid border-[#976ec2] bg-purple bg-[#e5d1fa] gap-14">
        <div
          className="text-7xl font-extrabold italic text-[#976ec2]"
          style={{ WebkitTextStroke: "2px #FFF" }}
        >
          pl&o
        </div>
        <button
          className="w-72 h-12 rounded-xl bg-[#976ec2] text-white text-lg font-semibold"
          onClick={goSignUp}
        >
          sign up
        </button>
      </div>
    </div>
  );
};
export default SignIn;
