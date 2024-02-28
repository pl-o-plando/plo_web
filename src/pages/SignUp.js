const SignUp = () => {
  return (
    <div className="sign-container">
      <form className="sign-screen gap-10">
        <div className="text-5xl font-extrabold text-[#976ec2] mb-10">
          Sign up
        </div>
        <input placeholder="nickname" type="name" className="sign-input" />
        <input placeholder="email" type="email" className="sign-input" />
        <input
          placeholder="password"
          type="password"
          className="sign-input
        "
        />
        <input placeholder="password" type="password" className="sign-input" />
        <button className="sign-btn" type="submit">
          Sign up
        </button>
      </form>
      <div className="sign-screen bg-[#e5d1fa] gap-14">
        <div
          className="text-7xl font-extrabold italic text-[#976ec2]"
          style={{ WebkitTextStroke: "2px #FFF" }}
        >
          pl&o
        </div>
        <div
          className="text-4xl font-extrabold italic text-white"
          style={{ WebkitTextStroke: "2px #976ec2" }}
        >
          Thank you for <br />
          signing up
        </div>
      </div>
    </div>
  );
};
export default SignUp;
