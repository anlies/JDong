// JavaScript Document
//导航
addEvent(window,'load',function(){
	
	//弹框
	var oHeadLtUl=document.getElementById('hdRtUl');
	var aLtLi=[document.getElementById('dingdan'),document.getElementById('pj'),document.getElementById('weixin'),document.getElementById('client'),document.getElementById('nav')]
	var oHdAlert=document.getElementById('hdAlert');
	var aAlertUl=oHdAlert.getElementsByTagName('ul');//6ge
	  show1(aLtLi[0],aAlertUl[1]);
	  out1(aLtLi[0],aAlertUl[1])
	  show1(aLtLi[1],aAlertUl[2]);
	  out1(aLtLi[1],aAlertUl[2]);
	  show1(aLtLi[2],aAlertUl[3]);
	  out1(aLtLi[2],aAlertUl[3]);
	  show1(aLtLi[3],aAlertUl[4]);
	  out1(aLtLi[3],aAlertUl[4]);
	  show1(aLtLi[4],aAlertUl[5]);
	  out1(aLtLi[4],aAlertUl[5]);
	//送货至
	var oTxtAdress=document.getElementById('txtAdress');
	var oAdress=document.getElementById('adress');
	var aA=oAdress.getElementsByTagName('a');
	var city=['上海','北京','广东','湖北','福建','安徽','北京','重庆','广东','广西','贵州','甘肃'];
	
	   oTxtAdress.value=city[4];
		show(oTxtAdress,oAdress);		
		out(oTxtAdress,oAdress);
		for(i=0;i<city.length;i++){
		  aA[i].index=i;
		  aA[i].onclick=function(){
	   	  oTxtAdress.value=city[this.index]
		  }
		}
		
  //关广告
     var exit=document.getElementById('exit')
	 var ads=document.getElementById('ads')
	 exit.onclick=function(){
		 ads.style.display='none'
	  }



   //商品店铺切换
    var oGood=document.getElementById('good');
	var oShop=document.getElementById('shop');
	var aShop=oShop.getElementsByTagName('a');
	var cho=['店铺','商品' ]
	    oGood.onmouseover=oShop.onmouseover=function(){
			oShop.style.display='block'; 
			oGood.className="goodActive"}

		oGood.onmouseout=oShop.onmouseout=function(){
			oShop.style.display='none';
		    oGood.className="goodLink";}
		
          for(i=0;i<2;i++){
		   aShop[i].index=i;
		   aShop[i].onclick=function(){
			  oGood.innerHTML=cho[this.index]
		   }
		   }
   //鼠标点击搜索框字消失
   var sear_txt=document.getElementById('sear_txt')
   sear_txt.onclick=function(){
	   sear_txt.value=''
	   }
   //回到顶部
   BackTop()

})
//onmouseover1
        function show(obj1,obj2){
		obj1.onmouseover=obj2.onmouseover=function(){
			obj2.style.display='block';
			}
}
//onmouseout1
        function out(obj1,obj2){
		obj1.onmouseout=obj2.onmouseout=function(){
			obj2.style.display='none';
			}
      }
//弹框
function show1(obj1,obj2){
		obj1.onmouseover=obj2.onmouseover=function(){
			obj2.style.display='block';
			obj1.className='RTActive';

			}
	 }
function out1(obj1,obj2){
		obj1.onmouseout=obj2.onmouseout=function(){
			obj2.style.display='none';
			obj1.className='RTLink';
		   }
      }


//回到原点
function BackTop(){
	var oBack=document.getElementById('backTop');
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
	}
	
	
	
	
	
	  
//三级菜单 二级菜单    baner滚
addEvent(window,'load',function(){
	var allBt1=document.getElementById('allBt1')
	var allBt=document.getElementById('allBt')
	var aDD=allBt.getElementsByTagName('dd')//menu2  list
	var oMenu3=document.getElementById('menu3')
	var aMenu3Div=oMenu3.getElementsByTagName('div')//menu3  content
    for(i=0;i<aDD.length;i++){
		aDD[i].index=i
		aMenu3Div[i].index=i
		aMenu3Div[i].onmouseover=aDD[i].onmouseover=function(){
			for(i=0;i<aDD.length;i++){
				aMenu3Div[i].style.display='none'
				aDD[i].className='ddLink'
				}
			aMenu3Div[this.index].style.display='block'
			aDD[this.index].className='ddActive'
			}
		aMenu3Div[i].onmouseout=aDD[i].onmouseout=function(){
			for(i=0;i<aDD.length;i++){
			 aMenu3Div[i].style.display='none'
			 aDD[i].className='ddLink'
			 }
			}
		}
		//2 3 end
		
		
	//banner
	var banImgUl=document.getElementById('banImgUl')
	banImgUl.innerHTML+=banImgUl.innerHTML
	var aLiImg=banImgUl.getElementsByTagName('li')
	var j=0;
	var Index=1;
	for(i=0;i<aLiImg.length;i++){
	 if(j==i){continue;}
	 aLiImg[i].style.opacity='0';
	 aLiImg[i].style.filter='alpha(opacity:0)'
	}
	
	
	var smallUl=document.getElementById('smallUl')
	var smallLi=smallUl.getElementsByTagName('li')
	
	var next=document.getElementById('next')
	var before=document.getElementById('before')
	for(i=0;i<smallLi.length;i++){
	   smallLi[i].index=i
	   smallLi[i].onclick=function(){
		j=this.index-1
		clearInterval(timer)
		doMove()
		timer=setInterval(doMove,2000)
		}
	}
	next.onclick=function(){
		if(j==aLiImg.length/2){
			j=-1
			}
		clearInterval(timer)
		doMove()
		timer=setInterval(doMove,2000)	
		}
	
	before.onclick=function(){
		j=j-2
		if(j<-1){
			j=smallLi.length-2
			}
		clearInterval(timer)
		doMove()
		timer=setInterval(doMove,2000)	
		}
	function doMove(){
		j++
		Index++
		if(j==aLiImg.length/2){
			j=0;
			smallLi[0].style.background='#33ee11'
			}
		for(i=0;i<smallLi.length;i++){
		smallLi[i].style.background='#ccc'
		}
		smallLi[j].style.background='#33ee11'
		aLiImg[j].style.zIndex=Index
	    startMove(aLiImg[j],{opacity:100},hide)
		}
	function hide(){
	 for(i=0;i<aLiImg.length;i++){
	   if(j==i){continue;}
	   aLiImg[i].style.opacity='0';
	   aLiImg[i].style.filter='alpha(opacity:0)'
	  }
	}
	var timer=setInterval(doMove,2000)	
	})	
	
//tab切换
addEvent(window,'load',function(){
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
	})
	
	
//无缝滚动
addEvent(window,'load',function(){
	var oScrollDiv=document.getElementById('scrollDiv')
	var oScrollUl=document.getElementById('scrollUl')
	scrollUl.innerHTML+=scrollUl.innerHTML;
	var aScrollLi=oScrollUl.getElementsByTagName('li')
	oScrollUl.style.width=aScrollLi[0].offsetWidth*aScrollLi.length+'px';
	var iWid=aScrollLi[0].offsetWidth*aScrollLi.length
	function doScroll(){
		if(oScrollDiv.scrollLeft>=978){
			oScrollDiv.scrollLeft=0
			}
		oScrollDiv.scrollLeft+=5
		}
	var timer=setInterval(doScroll,60)
	})
	
	
	
	
//换一换	
addEvent(window,'load',function(){
    var oChange=document.getElementById('change')
	var oChangeul=document.getElementById('changeul')
	var j=0;
	oChange.onclick=function(){
		j++
		oChangeul.innerHTML=''
		Ajax('change.txt',function(str){
			var arr=eval(str);
			if(j==arr.length){
				j=0
				}
			for(i=0;i<5;i++){;
			  
				var li=document.createElement('li');
				var img=document.createElement('img');
				img.src=arr[j].img[i];
				var content=document.createElement('p');
				content.innerHTML=arr[j].title[i];
				var price=document.createElement('p');
				price.className='fenhong';
				price.innerHTML=arr[j].txt1[i];
				li.appendChild(img);
				li.appendChild(content);
				li.appendChild(price);
				oChangeul.appendChild(li)	
				}
					
			})
		}
		
		
		
	//图片加载
	lodingImg()
	
	
	//排序
	var sortBt = new SortBt('sort','lodingUl')

})




////图片加载
function lodingImg(){
	var oLodingUl = document.getElementById('lodingUl');
	var aLi = oLodingUl.getElementsByTagName('li');
	var flag = true;
	window.onscroll=function(){
	var lastLi = aLi[aLi.length-1];
	var scrollT = document.documentElement.scrollTop||document.body.scrollTop;
	var cltH = document.documentElement.clientHeight;
	if(lastTop(lastLi) < (cltH+scrollT) && flag){
		Ajax('loding.txt',function(str){
			var arr = eval(str)
			for(var i = 0; i < arr.length; i++){
				for(var j = 0; j < arr[0].img.length; j++){
					var li = document.createElement('li')
					li.className = 'liLink';
					
					var img = document.createElement('img')
					img.src = arr[i].img[j];
					
					var p1 = document.createElement('p')
					p1.className = 'inTro'
					p1.innerHTML = arr[i].title[j];
					
					var p2 = document.createElement('p')
					p2.className = 'price'
					
					var span = document.createElement('span')
					span.innerHTML = arr[i].txt1[j];
					p2.className = 'fenhong'
					p2.appendChild(span)
					
					li.appendChild(img)
					li.appendChild(p1)
					li.appendChild(p2)
					oLodingUl.appendChild(li)
					}
				}
				flag = false;
			})
		  }
	   }
	
	}
function lastTop(obj){
	var top=0;
	while(obj){
		top+=obj.offsetTop;
		obj=obj.offsetParent
		}
	return top;
	}
	
	
function SortBt(id,ul){
	var _this=this;//this是当前对象
	this.oBt=document.getElementById(id);//this对象的
	this.oUl=document.getElementById(ul);
	aLi=this.oUl.getElementsByTagName('li')
    this.oBt.onclick=function(){
		_this.Sort()
		}
	
	}
SortBt.prototype.Sort=function(){
	var arr=[];
	for(var i=0;i<aLi.length;i++){
		arr[i]=aLi[i]
		}
	arr.sort(function(num1,num2){
		var a=num1.children[2].children[0].innerHTML;
		var b=num2.children[2].children[0].innerHTML;
		return a-b;
		})
	for(var i=0;i<arr.length;i++){
		this.oUl.appendChild(arr[i])
		}
	
	}