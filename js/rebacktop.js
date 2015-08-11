// JavaScript Document
var SetPostion = function(){
	//可视窗口的长与度
	var w_width = $(window).width();
	var w_height = $(window).height();
	//当前WEB的长与高
	var d_width = $(document).width();
	var d_height = $(document).height();
	//计算返回框左边和顶部的距离，parseInt()返回一个整数
	var top = parseInt(w_height-100);
	
	$(window).scroll(function(e) {
		if($(this).scrollTop() > 200){
			$(".rebacktop").css("display","block");
			top = parseInt(w_height-100) + $(document).scrollTop();
			$(".rebacktop").css("margin-top",top);
		}
		else{
			$(".rebacktop").css("display","none");
		}
    });

	
}
var OnMouse = function(){
	$(".rebacktop").mouseover(function(e) {
        $(".rebacktop").css("background-image","url(images/rebacktop_over.jpg)");
    });
	$(".rebacktop").mouseleave(function(e) {
        $(".rebacktop").css("background-image","url(images/rebacktop_leave.jpg)");
    });
	$(".rebacktop").click(function(e) {
        $(document).scrollTop(0);
    });
}
$(document).ready(function(e) {
    SetPostion();
	OnMouse();
});