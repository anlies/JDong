// JavaScript Document

window.onload=function(){
	var allBt=document.getElementById('allBt')
	var allBtList=document.getElementById('allBtList')
	showAllBt(allBt,allBtList,'allBt','allBtAc');
	
//商品价格升序降序	
	var oPrice=document.getElementById('price')
	var oCenterTd=getByClass(document,'centerTd');
    var arr=[];
	for(i=0;i<oCenterTd.length;i++){
		arr.push(oCenterTd[i].children[0].children[0].innerHTML)
		}
	var j=1
	oPrice.onclick=function(){
		j++
    var m=j%2;
	if(m==0){arr.sort(function(num1,num2){return num1-num2});}
	else{arr.sort(function(num1,num2){return num2-num1});}
	for(i=0;i<oCenterTd.length;i++){
		oCenterTd[i].children[0].children[0].innerHTML=arr[i]
		}
	}
	
	
//购物车数量加一减一
  var oTd=getByClass(document,'LastTD')	
  var aCut=getByClass(document,'cut')
  var aAdd=getByClass(document,'add')
  var aNum=[]
  for(i=0;i<oTd.length;i++){
   aNum+=oTd[i].children[0].children[0].innerHTML
   }
   //购物车加一
  for(i=0;i<aAdd.length;i++){
	  aAdd[i].index=i;
	  var j=0;
	  aAdd[i].onclick=function(){
		   oTd[this.index].children[0].children[0].innerHTML=parseInt(oTd[this.index].children[0].children[0].innerHTML)+1
		    j++
		   }
	  }
 
//购物车减一
 for(i=0;i<aCut.length;i++){
	  aCut[i].index=i;
	   var k=0;
	  aCut[i].onclick=function(){
		 if(oTd[this.index].children[0].children[0].innerHTML==0){oTd[i].children[0].children[0].innerHTML=0}
		 oTd[this.index].children[0].children[0].innerHTML=parseInt(oTd[this.index].children[0].children[0].innerHTML)-1
		  k++
		   }
	  }
	  
//删除购物车商品
     var aDel=getByClass(document,'del')
	 var aTr=getByClass(document,'tr')
	 var aTable=getByClass(document,'good')	
	 for(i=0;i<aDel.length;i++){
		 aDel[i].index=i;
		 aDel[i].onclick=function(){
			//aTable[this.index].removeChild(aTr[this.index])
			aTr[this.index].style.display='none'
			 }
		 }
		 
//价格总数
  // var allPrice=getByClass(document,'allPrice')
  var allPrice=document.getElementById('allPrice')
  var allP=0;
  for(i=0;i<arr.length;i++){
  allP+=parseFloat(arr[i])
  }
  allPrice.innerHTML=allP
	  
//文档加载结束	  
  }

function showAllBt(obj1,obj2,Link,Active){
	obj1.onmouseover=obj2.onmouseover=function(){
		obj2.style.display='block'
		obj1.className=Active
		}
	obj1.onmouseout=obj2.onmouseout=function(){
		obj2.style.display='none'
		obj1.className=Link
		}
	}	

	
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