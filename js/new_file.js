
	/* 请求我的成长接口 */
	var url1=resource.url.workerGrowUpList,tp='post',
		option1={
			'clientVersion':option.clientVersion,//版本号
			'clientType':option.clientType,//手机类型
			'appLoginToken':option.appLoginToken//登录token
		},	
		signStr=$.md5(sortStr(option1)),//签名排序加密
		option1=$.extend(option1,{'sign':signStr}),//参数追加
		//workerType=['','独立工人','工长','技师'];//工人性质
		
		//调用
		function callback1(msg){
			if(msg.code=="SUCCESS"){
				var data=msg.data,
					appWorkerUser=data.appWorkerUser;
					$('#user-name').text(appWorkerUser.name);//工人姓名
					$('.user-photo').css({'background':'url('+appWorkerUser.headUrl+') no-repeat center center','background-size':'100%'});//工人头像
					var mRankNameText;
					if (appWorkerUser.type == "1" ) {
						mRankNameText = "附属技师";
					} else if (appWorkerUser.type == "2") {
						if (appWorkerUser.level == "1") {
							mRankNameText = "普通工长";
						} else if (appWorkerUser.level == "2") {
							mRankNameText = "重点工长";
						} else if (appWorkerUser.level == "3") {
							mRankNameText = "核心工长" ;
						}
					} else if (appWorkerUser.type == "3") {
						if (appWorkerUser.level == "1") {
							mRankNameText = "普通技师";
						} else if (appWorkerUser.level == "2") {
							mRankNameText = "重点技师";
						} else if (appWorkerUser.level == "3") {
							mRankNameText = "核心技师";
						}
					} else {
						mRankNameText = "未知类型";
					}
					$('#user-position').text(mRankNameText);//工人性质
					
					$('#ordersNum').text(appWorkerUser.accpetCount);//接单量
					$('#commentNum').text(appWorkerUser.evaluateCount);//评价量
					$('#goodComment').text(appWorkerUser.goodEvaluateCount);//好评次数
					$('#badComment').text(appWorkerUser.noGoodEvaluateCount);//非好评次数
					$('#identifyNum1').text(data.sceneIdentificationCount);//神工认证数量
					$('#train-grade').text(data.sceneAverageScore);//培训评分
					$('#identifyNum2').text(data.brandIdentificationCount);//品牌认证数量
					$('#brand-grade').text(data.brandAverageScore);//平均分数	
					//分数
					$("#judge-txt1").append(judgeTxt(appWorkerUser.clientSatisfaction,appWorkerUser.clientSatisfactionLevel));//客户满意度
					$("#judge-txt2").append(judgeTxt(appWorkerUser.synthesize,appWorkerUser.synthesizeLevel)); //综合评分
					$("#service-img").append(judgeTxt(appWorkerUser.clientSatisfaction,appWorkerUser.clientSatisfactionLevel));//服务评分
					//星星等级	
					createStar(appWorkerUser.clientSatisfaction,$("#stars-1"));
					createStar(appWorkerUser.synthesize,$("#stars-2"));
					createStar(appWorkerUser.clientSatisfaction,$("#stars-service"));
					
			}else{
				KSTCFN('网络异常')
			}
		}
		common.access_server(tp,url1,option1,callback1);



	/* var list = [0,1,2,3,4];
	var len1 = 4.8;
	var len2 = parseInt(3.1)-1;
	var len3 = parseInt(5.9)-1;

	createStar(len1,$("#stars-1"));
	createStar(len2,$("#stars-2"));
	createStar(len3,$("#stars-service")); */
	
	//跳转  历史服务详情
	$("#history-btn").unbind().bind("click",function(){
		window.location = "historyServiceDetail.html?appLoginToken="+option.appLoginToken+"&clientType="+option.clientType+"&clientVersion="+option.clientVersion;
	})
	//跳转 工人评分简介
	$(".grow-title").unbind().bind("click",function(){
		window.location = "averGradeIntro.html?appLoginToken="+option.appLoginToken+"&clientType="+option.clientType+"&clientVersion="+option.clientVersion;
	})
	function createStar(lenth,$ele){
		for(var i = 0 ;i<5; i++) {
			var $li ;
			if(i<lenth){
				 $li = $('<li><img class="pd-btm-5" src="img/02.1.png"></li>');
			}else{
				$li = $('<li><img class="pd-btm-5" src="img/02.2.png"></li>');
			}
			$ele.append($li);			
		};
		//半颗星判断
		if(lenth>0&&lenth<1){
			$ele.find('li').eq(0).find('img').attr('src','img/ban.png');
		}else if(lenth>1&&lenth<2){
			$ele.find('li').eq(1).find('img').attr('src','img/ban.png');
		}else if(lenth>2&&lenth<3){
			$ele.find('li').eq(2).find('img').attr('src','img/ban.png');
		}else if(lenth>3&&lenth<4){
			$ele.find('li').eq(3).find('img').attr('src','img/ban.png');
		}else if(lenth>4&&lenth<5){
			$ele.find('li').eq(4).find('img').attr('src','img/ban.png');
		}
	}
	/* function judgeTxt(num,hasTxt){
		var $txt;
		var txt = hasTxt?num:'';
		if(num >= 0 && num < 2){
			$txt =	$('<p class="inline-block pd-rt-lt">'+txt+'</p>'+
					'<p class="inline-block"><img id="judge-tag1" src="img/01.3.png" /></p>');
		}else if(num >= 2 && num < 3){
			$txt =	$('<p class="inline-block pd-rt-lt">'+txt+'</p>'+
					'<p class="inline-block"><img id="judge-tag1" src="img/01.2.png" /></p>');
		}else if(num >= 3 && num < 5){
			$txt =	$('<p class="inline-block pd-rt-lt">'+txt+'</p>'+
					'<p class="inline-block"><img id="judge-tag1" src="img/01.1.png" /></p>');
		}
		return $txt;
	} */
	function judgeTxt(num,lev){
		var $txt;
		if(lev==3){
			$txt =	$('<p class="inline-block pd-rt-lt">'+num+'</p>'+
					'<p class="inline-block"><img id="judge-tag1" src="img/01.3.png" /></p>');
		}else if(lev==2){
			$txt =	$('<p class="inline-block pd-rt-lt">'+num+'</p>'+
					'<p class="inline-block"><img id="judge-tag1" src="img/01.2.png" /></p>');
		}else if(lev==1){
			$txt =	$('<p class="inline-block pd-rt-lt">'+num+'</p>'+
					'<p class="inline-block"><img id="judge-tag1" src="img/01.1.png" /></p>');
		}
		return $txt;
	} 
	
	//返回事件
	$('.back').unbind().on('click',function(){
		if(browser.versions.ios){	
			var cmd='backButton';
			window.location.href="ios://"+cmd;
		}else if(browser.versions.android){													
			if(window.android){
				window.android.backButton();
			}
		}
	})
