import { useForm } from "react-hook-form";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sign-container ">
      <form className="sign-screen" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-5xl font-extrabold text-[#976ec2] mb-10">
          Sign up
        </div>
        <input
          placeholder="nickname"
          type="name"
          className="sign-input"
          {...register("nickname", {
            required: "필수 입력 항목입니다.",
            maxLength: {
              value: 9,
              message: "닉네임은 최대 9자리까지 가능합니다.",
            },
          })}
        />
        <div className="sign-error-message">
          {errors.nickname && errors.nickname.message}
        </div>
        <div>
          <input
            placeholder="email"
            type="text"
            className="sign-input ml-12 mr-4"
            {...register("email", {
              required: "필수 입력 항목입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "올바른 이메일 형식이 아닙니다.",
              },
            })}
          />
          <button
            type="button"
            className={"text-[#976EC2] font-extrabold h-12"}
          >
            확인
          </button>
        </div>
        <div className="sign-error-message">
          {errors.email && errors.email.message}
        </div>
        <input
          placeholder="password"
          type="password"
          className="sign-input
        "
          {...register("password", {
            required: "필수 입력 항목입니다.",
            pattern: {
              value:
                /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,18}$/,
              message:
                "영문, 숫자, 특수문자를 포함한 8자 이상 18자 이하의 비밀번호를 입력하세요.",
            },
          })}
        />
        <div className="sign-error-message">
          {errors.password && errors.password.message}
        </div>
        <input
          placeholder="password"
          type="password"
          className="sign-input"
          {...register("passwordChk", {
            required: "필수 입력 항목입니다.",
            validate: (value) =>
              value === watch("password") || "비밀번호가 일치하지 않습니다.",
          })}
        />
        <div className="sign-error-message">
          {errors.passwordChk && errors.passwordChk.message}
        </div>
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
