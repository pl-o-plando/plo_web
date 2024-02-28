const SignUp = () => {
  return (
    <div className="w-[900px] h-[700px] flex flex-row my-auto">
      <form className="flex flex-col w-2/4 h-full justify-center items-center border border-solid border-[#976ec2] gap-10">
        <div className="text-5xl font-extrabold text-[#976ec2] mb-10">
          Sign up
        </div>
        <input
          placeholder="nickname"
          type="name"
          className="w-72 h-12 border border-1 border-solid border-[#976ec2] rounded-xl text-sm"
        />
        <input
          placeholder="email"
          type="email"
          className="w-72 h-12 border border-1 border-solid border-[#976ec2] rounded-xl text-sm"
        />
        <input
          placeholder="password"
          type="password"
          className="w-72 h-12 border border-1 border-solid border-[#976ec2] rounded-xl text-sm
        "
        />
        <input
          placeholder="password"
          type="password"
          className="w-72 h-12 border border-1 border-solid border-[#976ec2] rounded-xl text-sm"
        />
        <button
          className="w-72 h-12 rounded-xl bg-[#976ec2] text-white text-lg font-semibold"
          c
          type="submit"
        >
          Sign up
        </button>
      </form>
      <div className="flex flex-col w-2/4 h-full justify-center items-center border border-solid border-[#976ec2] bg-[#e5d1fa] gap-14">
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
