import React, { useState } from "react";
import './LoginForm.css';
import bg from './img/bg.svg';
import avatar from './img/avatar.svg';
import wave from './img/wave.png'
import polldance_logo from './img/polldance_logo.jpg';
function LoginForm({history}) {

  const login=()=>{
	console.log(history.push('/admin/main'))
  }

  return (
	<div>
		<img class="wave" src={wave} />
		<div className="container">
			<div className="img">
				<img src={bg} />
			</div>
			
			<div className="login-content">
				<div className="form">
					<img src={polldance_logo} />
					<h2 className="title">Admin Page</h2>
					<div className="input-div one">
						<div className="i">
							<i className="fa fa-user"></i>
						</div> 
						<div className="div">
							<h5>Userid</h5>
							<input type="text" className="input" />
						</div>
					</div>
					<div className="input-div pass">
						<div className="i">
							<i className="fa fa-lock"></i>
						</div>
						<div className="div">
							<h5>Password</h5>
							<input type="password" className="input"></input>
					</div>
				</div>
				<a href="#">비밀번호를 잊어버리셨습니까?</a>
				<a href="#">관리자 아이디 만들기</a>
				<input type="submit" className="btn" value="Login" onClick={login}></input>
				</div>
			</div>
		</div>
	</div>
  );
}
export default LoginForm;