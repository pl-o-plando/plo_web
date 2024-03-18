import React from "react";

const TodoList = () => {
  return (
    <div
      className={
        " w-[48%] bg-[#F7EFFF] rounded-lg flex flex-row items-center p-5 text-lg"
      }
      style={{ border: "1px solid #976EC2" }}
    >
      <div
        className={" bg-white w-8 h-8 mr-4"}
        style={{ border: "1px solid #976EC2" }}
      ></div>
      <div className={"font-medium"}>피그마 완성하기</div>
    </div>
  );
};

export default TodoList;
