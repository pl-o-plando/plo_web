import React from "react";
import CategoryAndTodo from "./CategoryAndTodo";

const Todo = () => {
  return (
    <div
      className={" bg-[#E5D1FA] rounded-md m-4 p-4 my-20"}
      style={{ border: "1px solid #976EC2" }}
    >
      <div className={"flex flex-row items-center"}>
        <p
          style={{ WebkitTextStroke: "1px #976EC2" }}
          className={"text-white text-3xl font-extrabold py-3 pl-4"}
        >
          Todo
        </p>
      </div>
      <div
        className={" bg-white rounded-md m-1 py-5 px-4"}
        style={{ border: "1px solid #976EC2" }}
      >
        <CategoryAndTodo />
        <CategoryAndTodo />
      </div>
    </div>
  );
};

export default Todo;
