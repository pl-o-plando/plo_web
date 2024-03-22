import React from "react";
import "../../styles/Modal.css";
import { IoClose } from "react-icons/io5";

const RoutineModal = ({ modalState, onClose, routines }) => {
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
              {routines.map((item, index) => {
                return <div className="itemBox">{item}</div>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoutineModal;
