import React from "react";
import "../../styles/Modal.css";
import { IoClose } from "react-icons/io5";

const DoingTodoModal = ({ modalState, onClose, doingTodos }) => {
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
              {doingTodos.map((item, index) => {
                return (
                  <div className="itemBox">
                    <div className={"flex flex-row justify-between mb-3"}>
                      <p>{item.title}</p>
                      <p className={"text-[#976EC2]"}>{item.category}</p>
                    </div>
                    <p className={"text-[#848484]"}>{item.date}~</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoingTodoModal;
