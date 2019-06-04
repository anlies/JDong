// JavaScript Document
//tab切换
addEvent(window,'load',function(){
  var nav=document.getElementById('nav')
  var aA=nav.getElementsByTagName('a')
  var aRegistDiv=getByClass(document,'registDiv')
  for(i=0;i<aA.length;i++){
		aA[i].index=i;
		aA[i].onmouseover=function(){
		tab(aA,aRegistDiv,'aLink','aActive',this.index)
		}
      } 
 })


addEvent(window,'load',function(){
//head头部下拉
    var oFuwu=document.getElementById('fuwu')
	var aFuwuList=document.getElementById('fuwuList')
	var oDaohang=document.getElementById('daohang')
	var aDaohangList=document.getElementById('daohangList')
	showList(oFuwu,aFuwuList,'liActive','liLink')
	showList(oDaohang,aDaohangList,'liActive','liLink')
	
  })
  
 //验证
addEvent(window,'load',function(){
	 //姓名验证
	var oName=document.getElementById('username');
	var aErroTig=getByClass(document,'erroTig')//多组
	var aRightTig=getByClass(document,'rightTig')//多组
	addEvent(oName,'blur',checkName)
    //密码验证
	var password1=document.getElementById('password1')
	var passTig=document.getElementById('passTig')
	var passLen=document.getElementById('passLen')
	var kong =document.getElementById('kong')
	var num=document.getElementById('num')
	addEvent(password1,'blur',checkPass)
	
	
	//再次确认密码
	var password2=document.getElementById('password2')
	addEvent(password2,'blur',passAgin)
    
	
	//手机号码验证
	var tel=document.getElementById('tel')
	addEvent(tel,'blur',checkTel)
	
	
  })
  
  
  
 //姓名验证
function checkName(){
	var oName=document.getElementById('username');
	var aErroTig=getByClass(document,'erroTig')//多组
	var aRightTig=getByClass(document,'rightTig')//多组
	
	if(oName.value==''){
		aRightTig[0].style.display='none'
		aErroTig[0].style.display='block'
		return false;
		}
	else{aErroTig[0].style.display='none';
	    aRightTig[0].style.display='block'
		return true;
	   }
	}
	
	//密码验证
function checkPass(){
	var password1=document.getElementById('password1')
	var passTig=document.getElementById('passTig')
	var passLen=document.getElementById('passLen')
	var kong =document.getElementById('kong')
	var num=document.getElementById('num')
	
	var reLength=/^.{6,16}$/;
	var rekong=/\s/g   //如果非空格
	var reNum=/^[0-9]{1,9}$/  //如果都是数字
	
	if(reLength.test(password1.value)){
	   passTig.style.display='block'
	   passLen.className='passAc'
		}
	
	else{
		passTig.style.display='block'
		passLen.className='passLink'
		}
		
	//2
	
	if(rekong.test(password1.value)){
	   passTig.style.display='block'
	   kong.className='passLink'
		}
	
	else{
		passTig.style.display='block'
		kong.className='passAc'
		}
		//3
	if(reNum.test(password1.value)){
	   passTig.style.display='block'
	   num.className='passLink'
	   return false
		}
	
	else{
		passTig.style.display='block'
		num.className='passAc'
		return true
		}
	}
	
	//再次确认密码	
function passAgin(){
	var password1=document.getElementById('password1')
	var password2=document.getElementById('password2')
	var aErroTig=getByClass(document,'erroTig')//多组
	var aRightTig=getByClass(document,'rightTig')//多组
	if(password2.value==password1.value&&password2.value!=''){
		 aErroTig[1].style.display='none'
		 aRightTig[1].style.display='block'
		 return true
		}
	 else{
		 aErroTig[1].style.display='block'
		 aRightTig[1].style.display='none'
		 return false
		 }
	}
	
	
//手机号码验证		
function checkTel(){
	var tel=document.getElementById('tel')
	var aErroTig=getByClass(document,'erroTig')//多组
	var aRightTig=getByClass(document,'rightTig')//多组
	var re=/^1[3|5|7|8][0-9]{9}$/
	if(re.test(tel.value)){
		aErroTig[2].style.display='none'
		aRightTig[2].style.display='block'
		return true;
		}
	else{
		 aErroTig[1].style.display='block'
		 aRightTig[1].style.display='none'
		 return false
		 }
	}
	


function checkSub(){
	if(checkTel()&&passAgin()&&checkPass()&&checkName()){
		var oName=document.getElementById('username');
		var password1=document.getElementById('password1')
		var tel=document.getElementById('tel')
		setCookie('username',oName.value,30)
		setCookie('password',password1.value,30)
		setCookie('tel',tel.value,30)
		}
	else{
		alert('注册失败。。。')
		}
	}