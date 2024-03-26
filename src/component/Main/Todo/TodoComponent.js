import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import DetailModal from "../../Modal/DetailModal";
import TodoDropdownModal from "../../Modal/TodoDropdownModal";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";

const TodoList = ({ todo }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
  };

  const [state, setState] = useState(0);

  const [isTodoDropdownModalOpen, setIsTodoDropdownModalOpen] = useState(false);
  const closeDropdownModal = () => {
    setIsTodoDropdownModalOpen(false);
  };

  const changeState = (value) => {
    setState(value);
  };

  return (
    <div
      className={
        " w-[48%] bg-[#F7EFFF] rounded-lg flex flex-row items-center p-5 text-lg min-w-64"
      }
      style={{ border: "1px solid #976EC2" }}
    >
      {/* <div
        style={{
          backgroundColor: "white",
          border: "1px solid #976EC2",
          width: "32px",
          height: "32px",
        }}
        onClick={() => setIsTodoDropdownModalOpen(!isTodoDropdownModalOpen)}
      ></div> */}
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #976EC2",
          width: "32px",
          height: "32px",
        }}
        onClick={() => setIsTodoDropdownModalOpen(!isTodoDropdownModalOpen)}
      >
        {state === 0 ? (
          <IoClose size={30} />
        ) : state === 1 ? (
          <FaExclamation size={30} />
        ) : (
          <FaCheck size={30} />
        )}
      </div>
      {isTodoDropdownModalOpen && (
        <TodoDropdownModal
          dropdownState={isTodoDropdownModalOpen}
          onClose={closeDropdownModal}
          changeState={changeState}
        />
      )}
      <div className={"font-medium flex-1 overflow-auto break-words mx-4"}>
        {todo}
      </div>
      {/* 누르면 Detail 모달창 열림 */}
      <IoMdSettings
        size="2rem"
        color="976EC2"
        onClick={() => {
          setIsDetailModalOpen(!isDetailModalOpen);
        }}
      />
      {isDetailModalOpen && (
        <DetailModal
          modalState={isDetailModalOpen}
          onClose={closeDetailModal}
        />
      )}
    </div>
  );
};

export default TodoList;
