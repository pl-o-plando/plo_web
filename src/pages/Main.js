import React from "react";
import Calendar from "../component/Main/Calendar";
import Todo from "../component/Main/Todo/Todo";
import NoDiary from "../component/Main/Diary/NoDiary";
const Main = () => {
  return (
    <div className={"w-full"}>
      <Calendar />
      <Todo />
      <NoDiary />
    </div>
  );
};

export default Main;
