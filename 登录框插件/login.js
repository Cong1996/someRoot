function initAlert(loginButtonId){
	document.body.innerHTML+=`
		<div id="alertArea" class="loginAlertArea disappear">
		<div  class="loginAlert">
			<div id="login" class="">
				<div class="title"><span>注册</span><i id="closeLoginButton" class="fa">X</i></div>
				<ul id="loginForm" class="formArea">
					<li>
						<input type='text' placeholder='输入用户名'>
					</li>
					<li>
						<input type='text' placeholder='输入邮箱'>
					</li>
					<li>
						<input type='text' placeholder='输入密码'>
					</li>
				</ul>
				<button id="loginButton" class="submitButton">注册</button>
				<span id="loginText" class="submitText">已有账号登录</span>
			</div>
			<div id="register" class="disappear">
				<div class="title"><span>登录</span><i id="closeRegisterButton" class="fa fa-close"></i></div>
				<ul id="registerForm" class="formArea">
					<li>
						<input type='text' placeholder='输入用户名'>
					</li>
					<li>
						<input type='text' placeholder='输入密码'>
					</li>
				</ul>
				<button id="registerButton" class="submitButton">登录</button>
				<span id="registerText" class="submitText">没有账号？登录</span>
			</div>		
		</div>
	</div>
	`;
	let login=document.getElementById('login'),
	register=document.getElementById('register'),
	alertArea=document.getElementById('alertArea'),
	navLoginButton=document.getElementById(loginButtonId);
	navLoginButton.onclick=disappearArea;
	alertArea.addEventListener('click',function(e){
		switch(e.target.id){
			case 'loginText':
			case 'registerText':
				disappearForm();break;
			case 'closeLoginButton':
			case 'closeRegisterButton':
				disappearArea();
				break;
		}
	});
	function disappearForm(){
		login.classList.toggle('disappear');
		register.classList.toggle('disappear');
	}
	function disappearArea(){
		alertArea.classList.toggle('disappear');
	}
};
initAlert('navLoginButton');