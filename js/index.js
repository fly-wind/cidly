
var num;

//语言选择切换
var switchLang = function(){
	num = 0;
	$(".switch-language").click(function(){
		//$(".menu-language").animate({width:'toggle'},"slow");
		//$(".menu-language").toggle();
		num++;
		if(num % 2 != 0){
			$(".menu-language").addClass("languagestyle");
		}
		else
			$(".menu-language").removeClass("languagestyle");
	});
}
//屏幕变小时
//左边导航栏的显示与隐藏（屏幕出现上面导航栏时），语言的切换
var switchMenu = function(){
	$(".flag").click(function(){
		$(".header-languages").toggle();
	});
	num = 0;
	$(".bars").click(function(){
		//$(".menu-language").animate({width:'toggle'},"slow");
		//$(".menu-language").toggle();
		num++;
		if(num % 2 != 0){
			$(".left-menu").removeClass("fadeOutLeft");
			$(".left-menu").addClass("fadeInRight");
		}
		else
		{	
			$(".left-menu").removeClass("fadeInRight");
			$(".left-menu").addClass("fadeOutLeft");
		}
	});
}

//点击按钮跳到下一个锚点
$(function(){
	$(".slide-picture").click(function(){
		$(".intro").animate({href:"index.html#about"},"slow");
		//$(".menu-language").toggle();
	});
});

window.isclick = false;
//点击不同锚点添加样式
$(function(){
	$("#list li").click(function(){
		$(window).off("scroll", scrollTitle);
		$(this).siblings().removeClass("selected");
		$(this).addClass("selected");
		isclick = true;
		setTimeout(function(){
			isclick = false;
		},1000);
	});
});


/*滚动屏幕改变标题样式*/
var scrollTitle = function(){
	if($(document).height() > $(window).height()){
		$(window).scroll(function(){
			//文档顶端到当前屏幕顶端的距离
			if(isclick == false){
				var this_scrollTop = $(this).scrollTop();

				//屏幕滚动条滚动，菜单链接改变样式
				var arrdiv = new Array("#about","#Plant-lamp","#Aquarium-lamp","#plantlamp","#contacts-us");		
				//块到文档顶部的值	
				var docHeight;
				//块自身高度
				var selfHeight;
				//文档高度
				var scrollHeight = $(document).height();
				//窗口高度
	　　        var windowHeight = $(this).height();
				
				//当已获取到当前索引值，改变菜单选项样式，loop为1，退出循环
				var loop = 0;	
				for(i = 0; i < arrdiv.length; i++){
					docHeight = $(arrdiv[i]).offset().top;
					selfHeight = $(arrdiv[i]).height();	
					if( this_scrollTop == docHeight || this_scrollTop < (docHeight + selfHeight) ){
						//当前索引与屏幕滚动条所在的块位置一致
						$("#list li").each(function(index){
							if(index == i && loop == 0){
								$("#list li").removeClass("selected");
								$(this).addClass("selected");
								loop = 1;
							}
						});				
					}
					//已经到达底部
					if(this_scrollTop + windowHeight == scrollHeight){
						index = arrdiv.length - 1;
						$("#list li").each(function(index){
								$("#list li").removeClass("selected");
								$(this).addClass("selected");
								loop = 1;
						});	
					}
				}
				//回到文档顶部
				if(this_scrollTop <= $("#intro").height() )
					$("#list li").removeClass("selected");
			}
		});
	}
}

var scrollAnimation = function(){
	
	if($(document).height() > $(window).height()){
		$(window).scroll(function(){
			
			var this_scrollTop = $(this).scrollTop();

			var height_1 = $("#about").offset().top;
			divheight_1 = $("#about").height();		

			if(this_scrollTop >= (height_1 - 500) && this_scrollTop < height_1){
			    $(".about-article h1").addClass("slide_1");		            
			}
			if(this_scrollTop >= (height_1 - 400) && this_scrollTop < height_1){
			    $(".about-article p").addClass("slide_2");
			}				
			if(this_scrollTop >= (height_1 - 250) && this_scrollTop < height_1){
			    $(".about-article div").addClass("slide_3");
			}

			var height_3 = $("#Aquarium-lamp").offset().top;
			divheight_3 = $("#Aquarium-lamp").height();
			if(this_scrollTop >= (height_3 - divheight_3*0.8) && this_scrollTop < height_3){
			    $(".aquarium-photo").addClass("animate_1");
			}

			var height_4 = $("#plantlamp").offset().top;
			divheight_4 = $("#plantlamp").height();
			if(this_scrollTop >= (height_4 - divheight_4*0.8) && this_scrollTop < height_4){
			    $(".plantPhoto").addClass("animate_1");
			}

			var height_5 = $("#contacts-us").offset().top;
			divheight_5 = $("#contacts-us").height();
			if((height_5 - this_scrollTop) > 100 && (height_5 - this_scrollTop) < divheight_4){
			    $(".address-box-container").addClass("fadeInDown");
			} 
		});
	}
}

var activeBlock = "";
//点击不同图片出现相应文字
var onClickPicture = function(){
	$("#menu_con div").hide(); // Initially hide all menu_con

    $('#nav a').click(function(e) {
        e.preventDefault();        
        $("#menu_con div").hide(); //Hide all menu_con
        $('.aquarium-all').show();
        $("#nav li").attr("id",""); //Reset id's
        $(this).parent().attr("id","current"); // Activate this
        $('#' + $(this).attr('title')).fadeIn(); // Show menu_con for current tab
        var currentTitle = $('#' + $(this).attr('title'));
        $(".aquarium-intro-contain").css("display","block");
        if(screen.width <= 600 )
        	$(".control").css("display","block");

        $("#closed img").click(function(){
    		$(".aquarium-intro-contain").css("display","none");
    		activeBlock = "";
    	});
    });
}

var onClickPicture1 = function(){
	$("#menu_con1 div").hide(); // Initially hide all menu_con

    $('#plantnav a').click(function(e) {
        e.preventDefault();        
        $("#menu_con1 div").hide(); //Hide all menu_con
        $('.plantInformation').show();
        $("#plantnav li").attr("id",""); //Reset id's
        $(this).parent().attr("id","current1"); // Activate this
        $('#' + $(this).attr('title')).fadeIn(); // Show menu_con for current tab
        var currentTitle = $('#' + $(this).attr('title'));
        $(".plant-intro-contain").css("display","block");
        if(screen.width <= 600 )
        	$(".control").css("display","block");

        $("#closed1 img").click(function(){
    		$(".plant-intro-contain").css("display","none");
    		activeBlock = "";
    	});
    });
}

//介绍文字上下页变换
var showBlock = function(){
	$(".aquarium-intro-contain").css("display","none");
	$(".control-next").click(function(){
		//第一次点击进来时可获取到current对应的title，否则就是在当前页进行上下页跳转		
		if(activeBlock == ""){
			activeBlock = "#" + $("#current a").attr("title");	
			//当前值
			curArtical = $(activeBlock);
		}	
		else{
			//当前值为下一个值
			curArtical = artical;			
		}
		//赋值下一个值
		artical = curArtical.next();
		//判断是否为最后一个值
		if(curArtical.attr("id") == "nav5"){
			artical = $("#nav1");
		}
		//隐藏当前，显示下一个
		curArtical.hide();
		artical.show();

	});

	$(".control-prev").click(function(){		
		if(activeBlock == ""){
			activeBlock = "#" + $("#current a").attr("title");	
			curArtical = $(activeBlock);
		}	
		else{
			curArtical = artical;			
		}
		artical = curArtical.prev();
		if(curArtical.attr("id") == "nav1"){
			artical = $("#nav5");
		}
		curArtical.hide();
		artical.show();

	});
}

//详细图片展示
var formatsClick = function(){
	var showList;
	var currentProduct;
	var nextProduct;
	var prevProduct;

	//显示对应的图片集合
	$(".button-transparent").click(function(){

		$(".m-top").css("display","none");


		//$("#aquarium-formats").removeClass("imgHide");
		$("#aquarium-formats").css("display","block");
		$("#aquarium-formats").removeClass("imgHide");
		$("#aquarium-formats").addClass("imgShow");
		$(".right-container").css("display","none");



		//获取点击的是哪个块
		$("#aquarium-formats").css("overflow","hidden");
		showList = "." + $("#current a").attr("title");
		$(showList).css("display","block");
		currentProduct = $(showList + " .formatsPhoto img:first");
		//隐藏当前所有图片
		$(showList + " .formatsPhoto img").css("display","none");		
		//显示当前块的第一张图片
		currentProduct.removeClass("imgHide");
		currentProduct.show();
	});

	//点击显示组的下张图片
	$(".product-next").click(function(){
		nextProduct = currentProduct.next();
		//下张图片没有时，赋值第一张图片
		if(!nextProduct.attr("style")){
			nextProduct = $(showList + " .formatsPhoto img:first");
		}		
		//隐藏当前图片
		//currentProduct.fadeOut();		
		//显示下张图片
		//nextProduct.fadeIn();
		currentProduct.removeClass("imgShow");
		currentProduct.addClass("imgHide");
		//currentProduct.attr("style","display:none");
		setTimeout(function(){			
			nextProduct.attr("style","display:block");
			nextProduct.removeClass("imgHide");
			nextProduct.addClass("imgShow");
		},500);
		//下一张图片的值赋值给当前值
		currentProduct = nextProduct;
	});

	//点击显示组的上张图片
	$(".product-prev").click(function(){
		prevProduct = currentProduct.prev();
		//上张图片没有时，赋值最后一张图片
		if(!prevProduct.attr("style")){
			prevProduct = $(showList + " .formatsPhoto img:last");
		}
		//隐藏当前图片
		//currentProduct.fadeOut();
		//显示上张图片
		//prevProduct.fadeIn();
		currentProduct.removeClass("imgShow");
		currentProduct.addClass("imgHide");
		//currentProduct.attr("style","display:none");
		setTimeout(function(){			
			prevProduct.attr("style","display:block");
			prevProduct.removeClass("imgHide");
			prevProduct.addClass("imgShow");
		},500);
		
		//前一张图片的值赋值给当前值
		currentProduct = prevProduct;
	});

	//关闭当前页
	$(".productClose").click(function(){

		$(".m-top").css("display","block");
		
		$("#aquarium-formats").css("overflow","visible");

		$(".right-container").css("display","block");
		$("#aquarium-formats").removeClass("imgShow");
		$("#aquarium-formats").addClass("imgHide");
		setTimeout(function(){
			$("#aquarium-formats").css("display","none");
			$("#aquarium-formats .Product").css("display","none");
		},1000);
		//光标停留在当前
		$("#returnThis").focus();
	});
}

var formatsClick1 = function(){
	var showList;
	var currentProduct;
	var nextProduct;
	var prevProduct;

	//显示对应的图片集合
	$(".button-transparent1").click(function(){

		$(".m-top").css("display","none");

		//$("#aquarium-formats").removeClass("imgHide");
		$("#plant-formats").css("display","block");
		$("#plant-formats").removeClass("imgHide");
		$("#plant-formats").addClass("imgShow");
		$(".right-container").css("display","none");



		//获取点击的是哪个块
		$("#plant-formats").css("overflow","hidden");
		showList = "." + $("#current1 a").attr("title");
		$(showList).css("display","block");
		currentProduct = $(showList + " .formatsPlantPhoto img:first");
		//隐藏当前所有图片
		$(showList + " .formatsPlantPhoto img").css("display","none");		
		//显示当前块的第一张图片
		currentProduct.removeClass("imgHide");
		currentProduct.show();
	});

	//点击显示组的下张图片
	$(".plant-next").click(function(){
		nextProduct = currentProduct.next();
		//下张图片没有时，赋值第一张图片
		if(!nextProduct.attr("style")){
			nextProduct = $(showList + " .formatsPlantPhoto img:first");
		}		
		//隐藏当前图片
		//currentProduct.fadeOut();		
		//显示下张图片
		//nextProduct.fadeIn();
		currentProduct.removeClass("imgShow");
		currentProduct.addClass("imgHide");
		//currentProduct.attr("style","display:none");
		setTimeout(function(){			
			nextProduct.attr("style","display:block");
			nextProduct.removeClass("imgHide");
			nextProduct.addClass("imgShow");
		},500);
		//下一张图片的值赋值给当前值
		currentProduct = nextProduct;
	});

	//点击显示组的上张图片
	$(".plant-prev").click(function(){
		prevProduct = currentProduct.prev();
		//上张图片没有时，赋值最后一张图片
		if(!prevProduct.attr("style")){
			prevProduct = $(showList + " .formatsPlantPhoto img:last");
		}
		//隐藏当前图片
		//currentProduct.fadeOut();
		//显示上张图片
		//prevProduct.fadeIn();
		currentProduct.removeClass("imgShow");
		currentProduct.addClass("imgHide");
		//currentProduct.attr("style","display:none");
		setTimeout(function(){			
			prevProduct.attr("style","display:block");
			prevProduct.removeClass("imgHide");
			prevProduct.addClass("imgShow");
		},500);
		
		//前一张图片的值赋值给当前值
		currentProduct = prevProduct;
	});

	//关闭当前页
	$(".productClose1").click(function(){

		$(".m-top").css("display","block");

		$("#plant-formats").css("overflow","visible");

		$(".right-container").css("display","block");
		$("#plant-formats").removeClass("imgShow");
		$("#plant-formats").addClass("imgHide");
		setTimeout(function(){
			$("#plant-formats").css("display","none");
			$("#plant-formats .Product1").css("display","none");
		},1000);
		//光标停留在当前
		$("#returnThis2").focus();
	});
}

//联系我们的信息框的鼠标样式
var onfocus = function(){
	$(".contact-infor input").focus(function(){
		if($(this).is("#contact_name") && $(this).attr("placeholder") == "Please write your name"){
			$(this).attr("placeholder","");
			$(this).css("border","1px solid red");
		}
		if($(this).is("#contact_email") && $(this).attr("placeholder") == "Please write your email"){
			$(this).attr("placeholder","");
			$(this).css("border","1px solid red");
		}
	});
	$(".contact-infor textarea").focus(function(){
		if($(this).attr("placeholder") == "Please write your message"){
			$(this).attr("placeholder","");
			$(this).css("border","1px solid red");
		}
	});
}
var onblur = function(){
	$(".contact-infor input").blur(function(){
		if($(this).is("#contact_name") && $(this).attr("placeholder") == ""){
			$(this).attr("placeholder","Please write your name");
			$(this).css("border","");
		}
		if($(this).is("#contact_email") && $(this).attr("placeholder") == ""){
			$(this).attr("placeholder","Please write your email");
			$(this).css("border","");
		}
	});
	$(".contact-infor textarea").blur(function(){
		if($(this).attr("placeholder") == ""){
			$(this).attr("placeholder","Please write your message");
			$(this).css("border","");
		}
	});
}

var returnScreen = function(){
	$(".right-container").click(function(){
		//回到屏幕时隐藏左边菜单栏或者上面的语言选择栏
		if($(".left-menu").is(".fadeInRight")){
			$(".left-menu").removeClass("fadeInRight");
			$(".left-menu").addClass("fadeOutLeft");
		}

		if($(".header-languages").css("display") == "block"){
			$(".header-languages").css("display","none");
		}
	});
}

$(document).ready(function(e){
	//语言切换
	switchLang();
	//左边菜单栏的显示与隐藏
	switchMenu();
	scrollTitle();
	//屏幕滚动动画
	scrollAnimation();
	//点击图片出现对应段落
	onClickPicture();
	onClickPicture1();
	//显示段落时，点击按钮可上下段落显示
	showBlock();
	//详细图片展示
	formatsClick();
	formatsClick1();
	//信息框的鼠标移入移出事件
	onfocus();
	onblur();
	//回到屏幕时隐藏菜单栏
	returnScreen();
});