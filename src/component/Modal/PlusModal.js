// Modal.js
import React, { useState } from "react";
import "../../styles/Modal.css";
import { IoClose } from "react-icons/io5";
import RoutineModal from "./RoutineModal";
import DoingTodoModal from "./DoingTodoModal";
import AddModal from "./AddModal";

const Modal = ({ modalState, onClose }) => {
  const plusMenu = [
    "TODO 작성하기",
    "진행 중인 TODO 불러오기",
    "루틴 불러오기",
  ];
  const [isRoutineModalOpen, setIsRoutineModalOpen] = useState(false);
  const closeRoutineModal = () => {
    setIsRoutineModalOpen(false);
  };

  const [isDoingTodoModalOpen, setIsDoingTodoModalOpen] = useState(false);
  const closeDoingTodoModal = () => {
    setIsDoingTodoModalOpen(false);
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  //임시데이터
  const routines = ["운동하기", "알고리즘 풀기"];
  const doingTodos = [
    { title: "피그마 완성하기", category: "카테고리1", date: "2024.02.19" },
    { title: "프로젝트 완성하기", category: "카테고리2", date: "2024.02.20" },
  ];

  return (
    <div>
      {modalState && (
        <div id="modalContainer">
          <div id="modalContent">
            <div id="closeBox">
              <IoClose
                size="50"
                onClick={() => {
                  onClose(); // 부모 컴포넌트의 상태 업데이트 함수 호출
                }}
              />
            </div>
            <div className="contentBox">
              {/* Todo 작성하기 */}
              <div
                className="itemBox"
                onClick={() => {
                  setIsAddModalOpen(!isAddModalOpen);
                }}
              >
                {plusMenu[0]}
              </div>
              {isAddModalOpen && (
                <AddModal modalState={isAddModalOpen} onClose={closeAddModal} />
              )}
              {/* 진행 중인 Todo 불러오기 */}
              <div
                className="itemBox"
                onClick={() => {
                  setIsDoingTodoModalOpen(!isDoingTodoModalOpen);
                }}
              >
                {plusMenu[1]}
              </div>
              {isDoingTodoModalOpen && (
                <DoingTodoModal
                  modalState={isDoingTodoModalOpen}
                  onClose={closeDoingTodoModal}
                  doingTodos={doingTodos}
                />
              )}
              {/* 루틴 불러오기 */}
              <div
                className="itemBox"
                onClick={() => {
                  setIsRoutineModalOpen(!isRoutineModalOpen);
                }}
              >
                {plusMenu[2]}
              </div>
              {isRoutineModalOpen && (
                <RoutineModal
                  modalState={isRoutineModalOpen}
                  onClose={closeRoutineModal}
                  routines={routines}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
