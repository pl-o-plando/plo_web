import React,{useState} from 'react';
import "../styles/Setting.css";
import plus from "../assets/btn_plus.png";

const Setting=()=> {
  const [nickname, setNickname] = useState('nickname');
  const [newNickname, setNewNickname] = useState('');
  const [isNicknameChanged, setIsNicknameChanged] = useState(false);
  const [md, setMd] = useState('아자아자 화이팅');
  const [newMd, setNewMd] = useState('');
  const [isMdChanged, setIsMdChanged] = useState(false);
  const [categories, setCategories] = useState(['']);
  const [routines, setRoutines] = useState(['']);

  const handleNicknameEdit = () => {
    setNickname(newNickname);
    setNewNickname('');
    setIsNicknameChanged(true);
  };

  const handleMdEdit = () => {
    setMd(newMd);
    setNewMd('');
    setIsMdChanged(true);
  }

  const handleAddCategory = () => {
    setCategories([...categories, '']);
  };

  const handleCategoryChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
  };

  const handleDeleteCategory = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  const handleAddRoutine = () => {
    setRoutines([...routines, '']);
  };

  const handleRoutineChange = (index, value) => {
    const newRoutines = [...routines];
    newRoutines[index] = value;
    setRoutines(newRoutines);
  };

  const handleDeleteRoutine = (index) => {
    const newRoutines = [...routines];
    newRoutines.splice(index, 1);
    setRoutines(newRoutines);
  };

  return (
    <div id='main'>
      <div id='box1'>
        <div id='nicknameBox'>
          <p>pl&o</p>
          <div>{nickname} 님</div>
        </div>
        <div id='mindedBox'>
          각오
          <input id='md' placeholder={isMdChanged ? md : "아자아자 화이팅"} value={newMd} onChange={(event) => setNewMd(event.target.value)}/>
          <div className='btn_edit' onClick={handleMdEdit}>수정</div>
        </div>
      </div>
      <div id='box2'>
        <div id='nickedit'>
          닉네임
          <input placeholder={isNicknameChanged ? nickname : "nickname"} style={{width:"650px", height:"40px", marginLeft:"150px", marginRight:"30px"}} value={newNickname} onChange={(event) => setNewNickname(event.target.value)}/>
          <div className='btn_edit' onClick={handleNicknameEdit}>수정</div>
        </div>
        <hr/>
        <div className='edit'>
          <div id='password'>
            현재 비밀번호
            <input placeholder='password' style={{width:"650px", height:"40px", marginLeft:"50px"}}/>
          </div>
          <div id='newPassword'>
            새 비밀번호 
            <input placeholder='password' style={{width:"650px", height:"40px",marginLeft:"80px", marginRight:"30px"}}/>
            <div className='btn_edit'>수정</div>
          </div>
          영소, 대문자, 특수기호 포함 8자리 이상 18자리 이하로 작성해주세요.
        </div>
        <hr/>
        <div className='edit'>
          <div style={{margin:"20px 0 40px 0", display:"flex", alignItems:"center"}}>
            카테고리
            <img src={plus} style={{marginLeft:"860px"}} onClick={handleAddCategory}/>
          </div>
          {categories.map((category, index) => (
            <div className='input' key={index} style={{marginBottom:"25px"}}>
              <input style={{ width: "750px", height: "40px", marginRight: "48px" }} value={category} onChange={(event) => handleCategoryChange(index, event.target.value)} />
              <div className='btn_edit' style={{ marginRight: "20px" }}>수정</div>
              <div className='btn_del'onClick={() => handleDeleteCategory(index)}>삭제</div>
            </div>
          ))}
          <div style={{margin:"30px 0 30px 60px", display:"flex", alignItems:"center"}}>
            루틴
            <img src={plus} style={{marginLeft:"860px"}} onClick={handleAddRoutine}/>
          </div>
          {routines.map((routine, index) => (
            <div className='input' key={index} style={{marginBottom:"25px", marginLeft:"60px"}}>
              <input style={{ width: "690px", height: "40px", marginRight: "48px" }} value={routine} onChange={(event) => handleRoutineChange(index, event.target.value)} />
              <div className='btn_edit' style={{ marginRight: "20px" }}>수정</div>
              <div className='btn_del' onClick={() => handleDeleteRoutine(index)}>삭제</div>
            </div>
          ))}
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