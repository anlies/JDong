// JavaScript Document

addEvent(window,'load',function(){
	//账号显示处
	var tel=document.getElementById('tel');
	if(getCookie('tel')!=''){
	tel.value=getCookie('tel');
	tel.onfocus=function(){tel.value=''}}
	else{tel.value=''}
	tel.onclick=function(){tel.value=''}
	addEvent(tel,'blur',checkTel)
	
	
	//立即注册
	goRegist()
	
	//自动登录
	var auto=document.getElementById('auto')
	addEvent(auto,'click',doDuto)
    
   //密码
	var pwd=document.getElementById('pwd');
	addEvent(pwd,'blur',checkPsd)
	})
	
//立即注册
function goRegist(){
	var goRegist=document.getElementById('goRegist');
	goRegist.onclick=function(){
	window.location='regist.html'
	}
	
	}
	
	
//记住密码
function doDuto(){
	var tel=document.getElementById('tel');
	var pwd=document.getElementById('pwd');
	tel.value=getCookie('tel')
	pwd.value=getCookie('password')
	
	}
//账号
function checkTel(){

	var tel=document.getElementById('tel');
	var aErroTig=getByClass(document,'erroTig')
	if(tel.value!=''){
		aErroTig[0].style.display='none'
		tel.className='telLink'
		return true
		}
	else{
		aErroTig[0].style.display='block'
		tel.className='telActive'
		tel.onfocus();
		return false
		}
	}
	
//密码
function checkPsd(){
	var pass=document.getElementById('pwd');
	var aErroTig=getByClass(document,'erroTig')
	if(pass.value!=''){
		aErroTig[1].style.display='none'
		pass.className='passLink'
		return true
		}
	else{
		aErroTig[1].style.display='block'
		pass.className='passActive'
		return false
		}
	}


//登陆到主页面
function loginMain(){
	var pass=document.getElementById('pwd');
	var aErroTig=getByClass(document,'erroTig')
	var tel=document.getElementById('tel');
	if(pass.value==getCookie('password')&&tel.value==getCookie('tel')&&pass.value!=''&&pass.value==getCookie('tel')&&pass.value!=''){
		aErroTig[2].style.display='none'
		return true
		}
		
		
	else{
		aErroTig[2].style.display='block'
		return false
		}

	
	
}