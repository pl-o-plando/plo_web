import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const navigate = useNavigate();
  const goSignUp = () => {
    navigate("/signup");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sign-container">
      <form className="sign-screen" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-5xl font-extrabold text-[#976ec2] mb-10">
          Sign in
        </div>
        <input
          placeholder="email"
          type="email"
          className="sign-input"
          {...register("email", {
            required: "필수 입력 항목입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
        />
        <div className="sign-error-message">
          {errors.email && errors.email.message}
        </div>
        <input
          placeholder="password"
          type="password"
          className="sign-input"
          {...register("password", {
            required: "필수 입력 항목입니다.",
            minLength: {
              value: 6,
              message: "비밀번호는 최소 6자 이상이어야 합니다.",
            },
          })}
        />
        <div className="sign-error-message">
          {errors.password && errors.password.message}
        </div>
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
