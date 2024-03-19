import React from "react";
import Calendar from "../component/Main/Calendar";
import Todo from "../component/Main/Todo/Todo";
import NoDiary from "../component/Main/Diary/NoDiary";
import DiaryShow from "../component/Main/Diary/DiaryShow";
const Main = () => {
  return (
    <div className={"w-full"}>
      <Calendar />
      <Todo />
      <NoDiary />
      <DiaryShow />
    </div>
  );
};

export default Main;
