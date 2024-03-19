import React from "react";
import Calendar from "../component/Main/Calendar";
import Todo from "../component/Main/Todo/Todo";
const Main = () => {
  return (
    <div className={"w-full"}>
      <Calendar />
      <Todo />
    </div>
  );
};

export default Main;
