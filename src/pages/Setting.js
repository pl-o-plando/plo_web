import React, { useState } from 'react';
import plus from "../assets/btn_plus.png";

const Setting = () => {
  // 닉네임, 각오
  const [nickname, setNickname] = useState('nickname');
  const [newNickname, setNewNickname] = useState('');
  const [isNicknameChanged, setIsNicknameChanged] = useState(false);
  const [md, setMd] = useState('아자아자 화이팅');
  const [newMd, setNewMd] = useState('');
  const [isMdChanged, setIsMdChanged] = useState(false);

  // 카테고리와 루틴
  const [categoriesAndRoutines, setCategoriesAndRoutines] = useState([{ category: '', routines: [''] }]);

  // 닉네임 수정 
  const handleNicknameEdit = () => {
    setNickname(newNickname);
    setNewNickname('');
    setIsNicknameChanged(true);
  };

  // 각오 수정 
  const handleMdEdit = () => {
    setMd(newMd);
    setNewMd('');
    setIsMdChanged(true);
  }

  // 카테고리 추가
  const handleAddCategory = () => {
    setCategoriesAndRoutines([...categoriesAndRoutines, { category: '', routines: [''] }]);
  };

  // 카테고리 변경 
  const handleCategoryChange = (index, value) => {
    const newCategoriesAndRoutines = [...categoriesAndRoutines];
    newCategoriesAndRoutines[index].category = value;
    setCategoriesAndRoutines(newCategoriesAndRoutines);
  };

  // 루틴 추가 
  const handleAddRoutine = (index) => {
    const newCategoriesAndRoutines = [...categoriesAndRoutines];
    newCategoriesAndRoutines[index].routines.push('');
    setCategoriesAndRoutines(newCategoriesAndRoutines);
  };

  // 루틴 변경 
  const handleRoutineChange = (categoryIndex, routineIndex, value) => {
    const newCategoriesAndRoutines = [...categoriesAndRoutines];
    newCategoriesAndRoutines[categoryIndex].routines[routineIndex] = value;
    setCategoriesAndRoutines(newCategoriesAndRoutines);
  };

  // 카테고리 삭제 
  const handleDeleteCategory = (index) => {
    if (categoriesAndRoutines.length > 1) {
      const newCategoriesAndRoutines = [...categoriesAndRoutines];
      newCategoriesAndRoutines.splice(index, 1);
      setCategoriesAndRoutines(newCategoriesAndRoutines);
    }
  };
  
  // 루틴 삭제 
  const handleDeleteRoutine = (categoryIndex, routineIndex) => {
    const category = categoriesAndRoutines[categoryIndex];
    if (category.routines.length > 1) {
      const newCategoriesAndRoutines = [...categoriesAndRoutines];
      newCategoriesAndRoutines[categoryIndex].routines.splice(routineIndex, 1);
      setCategoriesAndRoutines(newCategoriesAndRoutines);
    }
  };

  return (
    <div id='main'>
      <div id='box1'>
        <div id='nicknameBox'>
          <p>pl&o</p>
          <div>{nickname} 님</div>
        </div>
        <div id='mindedBox'>
          <span>각오</span>
          <textarea id='md' placeholder={isMdChanged ? md : "아자아자 화이팅"} value={newMd} onChange={(event) => setNewMd(event.target.value)} />
          <div className='btn_edit' onClick={handleMdEdit}>수정</div>
        </div>
      </div>
      <div id='box2'>
        <div id='nickedit'>
          닉네임
          <input placeholder={isNicknameChanged ? nickname : "nickname"} value={newNickname} onChange={(event) => setNewNickname(event.target.value)} />
          <div className='btn_edit' onClick={handleNicknameEdit}>수정</div>
        </div>
        <hr />
        <div className='edit'>
          <div>
            카테고리
            <img src={plus} onClick={handleAddCategory} />
          </div>
          {categoriesAndRoutines.map((item, index) => (
            <div key={index}>
              <div className='input' style={{ marginBottom: "25px" }}>
                <input value={item.category} onChange={(event) => handleCategoryChange(index, event.target.value)} />
                <div className='btn_edit'>수정</div>
                <div className='btn_del' onClick={() => handleDeleteCategory(index)}>삭제</div>
              </div>
              <div>
                루틴
                <img src={plus}onClick={() => handleAddRoutine(index)} />
              </div>
              {item.routines.map((routine, routineIndex) => (
                <div className='input' key={routineIndex} >
                  <input style={{ width: "690px", height: "40px", marginRight: "55px" }} value={routine} onChange={(event) => handleRoutineChange(index, routineIndex, event.target.value)} />
                  <div className='btn_edit' style={{ marginRight: "20px" }}>수정</div>
                  <div className='btn_del' onClick={() => handleDeleteRoutine(index, routineIndex)}>삭제</div>
                </div>
              ))}
              <hr />
            </div>
          ))}
        </div>
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
