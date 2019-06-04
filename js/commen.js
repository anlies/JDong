// JavaScript Document
//获取样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
		}
	else{
		return getComputedStyle(obj,false)[attr];
		}
	}	
	
	
//通过classname获取对象
function getByClass(obj,attr){
	var aAll=obj.getElementsByTagName('*');
	var arry=[];
	for(i=0;i<aAll.length;i++){
		if(aAll[i].className==attr){
			arry.push(aAll[i]);
			}
		}
		return arry;
	}

	
	
//banner播放轮番
function showBanner(){
    var oUl=document.getElementById('ul')
	var aLi=oUl.getElementsByTagName('li');
	
	var oUl2=document.getElementById('ul2')
	var aImg=oUl2.getElementsByTagName('li');
	//alert(aImg.length)
	oUl.innerHTML+=oUl.innerHTML;
	var j=0;
	var index=1;
	 
	for(i=0;i<aLi.length;i++){
		if(j==i){ continue;}
		aLi[i].style.filter='alpha(opacity:0)'
		aLi[i].style.opacity='0'
     }
	for(i=0;i<aImg.length;i++){
		aImg[i].index=i;
		aImg[i].onclick=function(){
			clearInterval(timer)
			j=this.index-1
			show()
			timer=setInterval(show,3000);
			}
		}
	aImg[j].style.opacity='1'
	aImg[j].style.filter='alpha(opacity:100)'
	
	//0显示 其余隐藏
	
	function show(){
		if(j==aLi.length/2){
			j=0;}
			j++
			index++
		
		for(i=0;i<aImg.length;i++){//初始化
			startMove(aImg[i],{opacity:'30'})//!!!!
			 }
		if(j==aImg.length){
			startMove(aImg[0],{opacity:'100'})//!!!!
			}
		else{
			startMove(aImg[j],{opacity:'100'})//!!!!
		}
		
		aLi[j].style.zIndex=index;
		startMove(aLi[j],{opacity:'100'},hide)//!!!!
		}
	
	 function hide(){
		for(i=0;i<aLi.length;i++){
	    	if(i==j){ continue;}
			aLi[i].style.filter='alpha(opacity):0'
		    aLi[i].style.opacity='0'
		 }
		 
		} 
	var timer=setInterval(show,3000);
	
}

//随机验证码
function code(){
	var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	         '1','2','3','4', '5','6','7','8','9','0']
	var str='';
	while(str.length<4){
	   var iNum=parseInt(Math.random()*100);
	   while(iNum>35){//因为下标不是从0开始的
		iNum=parseInt(Math.random()*100);
		}
      str+=arr[iNum];
	}
	return str;
	}
	
//over out
function showList(obj1,obj2,Active,Link){
	   obj1.onmouseover=obj2.onmouseover=function(){
		
			obj2.style.display='block'; 
			obj1.className=Active;}

		obj1.onmouseout=obj2.onmouseout=function(){
		   
			obj2.style.display='none';
		    obj1.className=Link;
			}
     	}
	

 //tab切换
 /*function tab(){
	var oUl_cen=document.getElementById('ul_cen')
	var aTabLi=oUl_cen.getElementsByTagName('li')
	var tabDiv1=document.getElementById('tabDiv')
	var aTabT=tabDiv1.getElementsByTagName('div')
	for(i=0;i<aTabLi.length;i++){
		aTabLi[i].index=i;
		aTabT[i].index=i;
		aTabT[i].onmouseover=aTabLi[i].onmouseover=function(){
			for(i=0;i<aTabT.length;i++){
				aTabT[i].style.display='none'
				aTabLi[i].style.background='#fff'}
			aTabT[this.index].style.display='block'
			aTabLi[this.index].style.background='green'
			}
		}
    }*/
	
	
	//滚动
/*function scroller(){	
    var oRight =document.getElementById('right');
    var oLeft =document.getElementById('left');

 
    var oBanner =  document.getElementById('banner');
    var oDiv =document.getElementById('div');
    var oUl=document.getElementById('ul')
	var aLi=oUl.getElementsByTagName('li');
    var aImg=oUl.getElementsByTagName('img');
    var oYuan =document.getElementById('yuan');
    var aYuanLi = oYuan.getElementsByTagName('li')
     oUl.innerHTML+=oUl.innerHTML;
     var iWidth=aLi[0].offsetWidth;
	 oUl.style.width=iWidth*aLi.length+'px';
     for(i=0;i<aYuanLi.length;i++){
	 aYuanLi[i].index=i;
	 aYuanLi[i].onclick=function(){
		 j = this.index-1;
		clearInterval(timer);
		tab()
		timer=setInterval(tab,2000)
		 }
	}
	
	
  oLeft.onclick=function(){
		  j = j-2;
		  if(j<-1){
			  j=aYuanLi.length-2;
			  }
		
		clearInterval(timer);
		 tab()
		timer=setInterval(tab,2000)
		 }
		 
  oRight.onclick=function(){
	 if(j>aYuanLi.length-2){
		  j=-1;
		}
		clearInterval(timer);//先清除再开
		tab()
		timer=setInterval(tab,2000)
		 }
	
     var iSpeed=0;
     var j=0
function tab(){
	 clearInterval(timer);//关掉clear里的timer
		j++
	for(i=0;i<aYuanLi.length;i++){
		aYuanLi[i].className='cenLink';
		oBanner.className='banner'+(i+1)
		//aLi[i].style.display='none'
		
		}
	if(j==aYuanLi.length){
		aYuanLi[0].className='cenActive';
		oBanner.className='banner1'
		}
	else{
	aYuanLi[j].className='cenActive';
	oBanner.className='banner'+(j+1)
	}
	
	iSpeed=-iWidth*j
	startMove(oUl,{left:iSpeed},clear)
	}
		
    function clear(){
		timer=setInterval(tab,2000)//开一下  解决走完一圈停一下问题
		if(j==(aYuanLi.length)){
			j=0
			oUl.style.left=0
			iSpeed=0
			
			}
		}
	
   timer=setInterval(tab,2000)	
}
	*/



//startMove方法
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
		}
		else{
			return getComputedStyle(obj,false)[attr]
				}
	
	}
function startMove(obj, json, fnEnd)
{
    var MAX=18;
    //每次调用就只有一个定时器在工作(开始运动时关闭已有定时器)
    //并且关闭或者开启都是当前物体的定时器，已防止与页面上其他定时器的冲突，使每个定时器都互不干扰 
    clearInterval(obj.timer); 
    obj.timer=setInterval(function (){
 
        var bStop=true; // 假设：所有的值都已经到了
 
        for(var name in json)
        {
            var iTarget=json[name];  // 目标点
 
            //处理透明度，不能使用parseInt否则就为0了 
 
            if(name=='opacity')
            {
 
                // *100 会有误差 0000007 之类的 所以要用 Math.round() 会四舍五入
                var cur=Math.round(parseFloat(getStyle(obj, name))*100); 
            }
            else
            {
                var cur=parseInt(getStyle(obj, name));  // cur 当前移动的数值
            }
 
            var speed=(iTarget-cur)/5;  // 物体运动的速度 数字越小动的越慢  /5 : 自定义的数字
 
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
 
            if(Math.abs(speed)>MAX)speed=speed>0?MAX:-MAX;
 
            if(name=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')'; //IE
                obj.style.opacity=(cur+speed)/100; //ff chrome
            }
            else
            {
                obj.style[name]=cur+speed+'px';
				document.title=cur
            }
 
            // 某个值不等于目标点 
            if(cur!=iTarget)
            {
                bStop=false;
            }
        }
 
        // 都达到了目标点
        if(bStop)
        {
            clearInterval(obj.timer);
 
            if(fnEnd) //只有传了这个函数才去调用
            {
                fnEnd();
            }
        }
    }, 20);
}




/*//回到原点
function BackTop(backDiv){
	var oBack=document.getElementById(backDiv);
	var width=true;
	var timer;
	window.onscroll=function(){//window!!!
	  if(!width){
		clearInterval(timer);}
	    width=false;
		}
	oBack.onclick=function(){
		timer=setInterval(function(){
		if(scrolltop==0){clearInterval(timer)}
		var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
		var iSpeed=-scrolltop/10;
		document.documentElement.scrollTop=document.body.scrollTop=scrolltop+iSpeed;
		width=true;
		},30)
	  }
	}*/
	
	
	

//兼容性写法 添加事件  事件绑定
function addEvent(obj,type,fn){
	if(obj.addEventListener){return obj.addEventListener(type,fn,false)}
	else if(obj.attachEvent){
		return obj.attachEvent('on'+type,fn)}
			
	}
	
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){return obj.removeEventListener(type,fn,false)}
	else if(obj.detachEvent){
		return 
		obj.detachEvent('on'+type,fn)}	
	}
function getTarget(ev){
	if(ev.target){
		return ev.target;
		}
	if(window.event.srcElement){
		return window.event.srcElement
		}
	}
	
//设置Cookies	
function setCookie(name,value,iDay){
	var oDate=new Date()
	oDate.setDate(oDate.getDate()+iDay)
	document.cookie=name+'='+value+';expires='+oDate
	}
//获取Cookies
function getCookie(name){
	var arr=document.cookie.split('; ')
	for(i=0;i<arr.length;i++){ 
		var array=arr[i].split('=')
		if(array[0]==name){
			return array[1]
			}
		}
	return ''
	}
//删除cookies
function removeCookie(name){
	setCookie(name,'22','-1')
	}




//创建Ajax
function Ajax(url,fnSucc,fnFaild){
	var oAjax=null;//创建Ajax
	if(window.XMLHttpRequest){
		oAjax=new XMLHttpRequest();
		}
	else{oAjax=new ACtiveXObject('MicroSoft.XMLHTTP')}
	oAjax.open('GET',url,true)
	oAjax.send();
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				fnSucc(oAjax.responseText)
				
				}
			else{if(fnFaild){fnFaild()}}
			}
		}
	
	}
	
//无缝滚动
function wufengMove(div,ul,before,next){	
    var scroUl=document.getElementById(ul)
	var scrDiv=document.getElementById(div)
	var aLi=scroUl.getElementsByTagName('li')
	scroUl.innerHTML+=scroUl.innerHTML
	scroUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	var iSpeed=0;
	function doM(){
	if(scrDiv.scrollLeft>=scroUl.offsetWidth/2){
		scrDiv.scrollLeft=0
	}
		
	if(scrDiv.scrollLeft<=0){
		scrDiv.scrollLeft=scroUl.offsetWidth/2;
	}
	scrDiv.scrollLeft+=iSpeed
	}	
	var timer=setInterval(doM,60)
	
	scrDiv.onmouseover=function(){
		 clearInterval(timer)
	} 
	
	scrDiv.onmouseout=function(){
		 timer=setInterval(doM,30);
	} 
	   var before=document.getElementById(before) 
	   var next=document.getElementById(next) 
	 before.onclick=function(){iSpeed=5}
	 next.onclick=function(){iSpeed=-5}
	
}