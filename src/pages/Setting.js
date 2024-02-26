import React from 'react';
import "../styles/Setting.css";

const Setting=()=> {
  return (
    <div>
      <div id='box1'>
        <div id='nicknameBox'>
          <p>pl&o</p>
          <div>nickname 님</div>
        </div>
        <div id='mindedBox'>
          <p>각오</p>
          <div id='md'>아자 아자 화이팅!!</div>
          <div id='btn_1'>수정</div>
        </div>
      </div>
      <div id='box2'>상세 설정</div>
    </div>
  );
}

export default Setting;