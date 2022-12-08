import React from 'react';

const RegisteredSuccessfully = (props) => {
  return (
    <>
      <div className="welcome-page-parent">
        <div className="welcome-img">
          <img
            src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="welcome-title">
          <h1>Successfully Logged In</h1>
          <p className='registered-email'>
          {localStorage.getItem("email")}
            
          </p>
        
        </div>
      </div>
    </>
  );
}

export default RegisteredSuccessfully;
