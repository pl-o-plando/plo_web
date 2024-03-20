import React, { useState } from "react";
import Calendar from "../component/Main/Calendar";
import Todo from "../component/Main/Todo/Todo";
import NoDiary from "../component/Main/Diary/NoDiary";
import DiaryShow from "../component/Main/Diary/DiaryShow";

const Main = () => {
  const [showDiary, setShowDiary] = useState(false);

  const handleDiaryButtonClick = () => {
    setShowDiary(true);
  };

  return (
    <div className={"w-full"}>
      <Calendar />
      <Todo />
      {showDiary ? <DiaryShow /> : <NoDiary onDiaryButtonClick={handleDiaryButtonClick} />}
    </div>
  );
};

export default Main;
