// CategoryAndTodo.js
import React, { useState } from "react";
import TodoComponent from "./TodoComponent";
import { GoPlusCircle } from "react-icons/go";
import PlusModal from "../../Modal/PlusModal";

const CategoryAndTodo = () => {
  const [isPlusModalOpen, setIsPlusModalOpen] = useState(false);
  const closePlusModal = () => {
    setIsPlusModalOpen(false);
  };

  //TodoList 목록
  const todoList = ["밥먹기", "운동하기", "프로젝트 마무리하기"];
  return (
    <div className={"mb-8"}>
      <div className={"flex flex-row justify-center mb-5"}>
        <p
          className={
            "bg-[#976EC2] rounded-lg text-center text-white py-0.5 px-3 font-semibold"
          }
          style={{ border: "1px solid #976EC2" }}
        >
          카테고리1
        </p>
        <div className={"flex-1"} />
        <GoPlusCircle
          size="30"
          color="976EC2"
          onClick={() => {
            setIsPlusModalOpen(!isPlusModalOpen);
          }}
        />
        {isPlusModalOpen && (
          <PlusModal modalState={isPlusModalOpen} onClose={closePlusModal} />
        )}
      </div>
      <div className="flex flex-row flex-wrap gap-y-2">
        {todoList.map((item, index) => (
          <React.Fragment key={index}>
            <TodoComponent todo={item} />
            {index % 2 === 0 && <div className="flex-1" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CategoryAndTodo;
