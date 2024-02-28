import React from 'react';
import "../styles/Setting.css";
import plus from "../assets/btn_plus.png";

const Setting=()=> {
  return (
    <div id='main'>
      <div id='box1'>
        <div id='nicknameBox'>
          <p>pl&o</p>
          <div>nickname 님</div>
        </div>
        <div id='mindedBox'>
          각오
          <input id='md'/>
          <div className='btn_edit'>수정</div>
        </div>
      </div>
      <div id='box2'>
        <div id='nickedit'>
          닉네임
          <input style={{width:"650px", height:"40px", marginLeft:"150px", marginRight:"30px"}}/>
          <div className='btn_edit'>수정</div>
        </div>
        <hr/>
        <div className='edit'>
          <div id='password'>
            현재 비밀번호
            <input style={{width:"650px", height:"40px", marginLeft:"50px"}}/>
          </div>
          <div id='newPassword'>
            새 비밀번호 
            <input style={{width:"650px", height:"40px",marginLeft:"80px", marginRight:"30px"}}/>
            <div className='btn_edit'>수정</div>
          </div>
          영소, 대문자, 특수기호 포함 8자리 이상 18자리 이하로 작성해주세요.
        </div>
        <hr/>
        <div className='edit'>
          <div style={{margin:"20px 0 40px 0", display:"flex", alignItems:"center"}}>
            카테고리
            <img src={plus} style={{marginLeft:"860px"}}/>
          </div>
          <div className='input'>
            <input style={{width:"750px", height:"40px", marginRight:"48px"}}/>
            <div className='btn_edit'  style={{marginRight:"20px"}}>수정</div>
            <div className='btn_del'>삭제</div>
          </div>
          <div style={{margin:"30px 0 30px 60px", display:"flex", alignItems:"center"}}>
            루틴
            <img src={plus} style={{marginLeft:"860px"}}/>
          </div>
          <div className='input' style={{marginLeft:"60px"}}>
            <input style={{width:"690px", height:"40px", marginRight:"48px"}}/>
            <div className='btn_edit' style={{marginRight:"20px"}}>수정</div>
            <div className='btn_del'>삭제</div>
          </div>
        </div>
        <hr/>
        <div className='edit'>
          <div id='out'>
            회원탈퇴
            <div id='btn_out'>탈퇴</div>
          </div>
          탈퇴 시 작성하신 모든 정보는 삭제되며 복구가 불가능합니다.
        </div>
      </div>
    </div>
  );
}

export default Setting;