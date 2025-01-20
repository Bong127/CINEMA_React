import React from 'react';
import { Link } from 'react-router-dom';
import * as my from '../../apis/my';
import Swal from 'sweetalert2';
import './MyPageEditForm.css';




const MyPageEditForm = ({ userInfo, updateUser, deleteUser }) => {


  // 정보 수정 
  const onUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const name = form.name.value;
    const email = form.email.value;
    const enabled = userInfo.enabled; // enabled 필드를 포함

    console.log(username, password, name, email, enabled);

    updateUser({ username, password, name, email, enabled });
  };

  return (

    <div className="mypageedit-content">
      <div className="mypageedit-title">
        <h5 style={{ color: 'white' }}>나의 정보</h5>
      </div>

      <div style={{ marginLeft: '290px', marginTop: '10px' }}>
        <h5 style={{ color: '#6c757d', fontSize: '24px', display: 'inline' }}>
          {userInfo.username}
        </h5>
        <span style={{ color: '#6c757d', fontSize: '16px' }}> 님</span>
      </div>

      <div className="mypage-profile-image-container">
        <img
          id="mypage-profileImage"
          src={userInfo.orifile ? `/api/files/img?id=${userStateInfo.orifile.id}` : "/api/files/image?id=C:/upload/normal.png"}
          style={{
            width: "124px",
            height: "124px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="프로필 이미지"
        />
      </div>

      <form className='userform-login-form' onSubmit={(e) => onUpdate(e)} >
        {/* <div>
                        <label htmlFor="username">username</label>
                        <input type="text"
                            id='username'
                            placeholder='username'
                            name='username'
                            autoComplete='username'
                            required
                            readOnly
                            defaultValue={userInfo?.username}
                        />
                    </div> */}
        <div className="userform-mb-4" id="box-id">
          <label htmlFor="username" className="userform-form-label">아이디</label>
          <div className="userform-d-flex align-items-center">
            <input
              type="text"
              id='username'
              className="userform-form-control me-2"
              style={{ backgroundColor: '#e9ecef', color: '#6c757d' }}
              placeholder='username'
              name='username'
              autoComplete='username'
              required
              readOnly
              defaultValue={userInfo?.username}
            />
          </div>
        </div>

        {/* <div>
            <label htmlFor="email">email</label>
            <input type="email"
              id='email'
              placeholder='email'
              name='email'
              autoComplete='email'
              required
              defaultValue={userInfo?.email} />
          </div> */}
        <div className="userform-mb-4" id="box-email">
          <label htmlFor="email" className="userform-form-label">이메일</label>
          <div className="userform-d-flex align-items-center">
            <input
              type="email"
              className="userform-form-control me-2"
              id='email'
              name='email'
              autoComplete='email'
              placeholder="새 이메일을 입력해주세요"
              required
              defaultValue={userInfo?.email} />
          </div>
        </div>

        {/* <div>
            <label htmlFor="password">password</label>
            <input type="password"
              id='password'
              placeholder="새 비밀번호를 입력해주세요"
              name='password'
              autoComplete='password'
              required />
          </div> */}
        <div className="userform-mb-2">
          <label htmlFor="password" className="userform-form-label">새 비밀번호</label>
          <div className="userform-d-flex align-items-center">
            <input
              type="password"
              className="userform-form-control"
              id='password'
              placeholder="새 비밀번호를 입력해주세요"
              name='password'
              autoComplete='password'
              required
            />
          </div>

        </div>
        <div className="userform-mb-2">
          <label htmlFor="password" className="userform-form-label">이름</label>
          <div className="userform-d-flex align-items-center">
            <input
              type="text"
              className="userform-form-control"
              id='name'
              placeholder='name'
              name='name'
              autoComplete='name'
              defaultValue={userInfo?.name}
              required
            />
          </div>
        </div>

        <div className="mypageedit-btn-container" style={{ marginBottom: '20px' }}>
          <button type="submit" className="mypageedit-btn-purple" style={{ width: '95px' }}>
            정보 수정
          </button>
          <button type="submit" className="mypageedit-btn-purple" style={{ width: '95px' }}
            onClick={() => deleteUser(userInfo.username)}>
            회원 탈퇴
          </button>
        </div>
      </form>

      <form id="infoForm" className="mypageedit-needs-validation" encType="multipart/form-data">
        <div className="mypageedit-divider" />

        <div className="mypageedit-btn-container" style={{ marginBottom: '20px' }}>
          <button type="submit" className="mypageedit-btn-purple" style={{ width: '125px' }}>
            저장
          </button>
        </div>
      </form>

      <div className="mypageedit-btn-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link
          to="/mypage"
          className="mypageedit-btn btn-secondary"
          style={{
            width: '200px',
            backgroundColor: '#6c757d',
            color: 'white',
            textDecoration: 'none',
            padding: '10px',
            display: 'inline-block',
            textAlign: 'center',
            borderRadius: '5px',
          }}
        >
          마이페이지 메인으로
        </Link>
      </div>

      <div style={{ marginBottom: '30px' }} />
    </div>


  );
};

export default MyPageEditForm;