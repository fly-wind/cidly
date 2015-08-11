
/*幻灯片切换*/
$(function(){
	var artical=$('.plant-all').artical();
	$('.btnprev').click(function(){
		console.log('click btnprev');
		artical.prev();
	});
	$('.btnnext').click(function(){
		console.log('click btnnext');
		artical.next();
	});
});

(function($){
	//artical为插件
	$.fn.artical = function() {
		// 定义curArtical 现在显示的对象
		this.curArtical = this.find('.plant-list:first')
		this.articals=this.find('.plant-list');
		this.index=0;
		this.sumArtical=this.articals.length;
		//隐藏所有artical
		this.find('.plant-list').hide();
		//创建一个panel显示用
		var panel=$('<div>').addClass('displayPanel').prependTo(this)
		.append('<div class="s_div"><div class="s_img"></div><div class="s_center"><div class="s_h2"></div><div class="s_p"></div></div></div><div class="right-fixed"></div>');
		this.obj={
				'img':panel.find('.s_img'),
				'h2':panel.find('.s_h2'),
				'p':panel.find('.s_p'),
		}
		//交换显示
		this.swipe = swipe;
		this.swipe();
		// 定义next,prev方法
		this.next = next;
		this.prev = prev;
		return this;
	}

	//添加样式（动画）
	function addAnimClass(obj,cls){
		obj.img.addClass(cls);
		obj.h2.addClass(cls);
		obj.p.addClass(cls);
	}
	//移除样式（动画）
	function removeAnimClass(obj,cls){
		obj.img.removeClass(cls);
		obj.h2.removeClass(cls);
		obj.p.removeClass(cls);
		
	}
	function clearObj(obj){
		obj.img.children().remove();
		obj.h2.children().remove();
		obj.p.children().remove();

	}
	//动画的替换
	function swipe(artical) {
		var me=this;
		if (artical != undefined) {
			addAnimClass(me.obj,'fadeOut');
			setTimeout(function(){
				removeAnimClass(me.obj,'fadeOut');
				show(artical,me);
			},1000);
		}else{
			show(this.curArtical,me);
		}

	}
	//显示块内容（清空块，把当前块复制给新的层）
	function show(artical,me){
		clearObj(me.obj)
		artical.find('.img').clone().appendTo(me.obj.img);
		artical.find('.h2').clone().appendTo(me.obj.h2);
		artical.find('.p').clone().appendTo(me.obj.p);
		addAnimClass(me.obj,"fadeIn");
		setTimeout(function(){
			removeAnimClass(me.obj,'fadeIn');
		},1000);
		me.curArtical=artical;
	}
	//点击下一个
	function next() {
		this.index++;
		if(this.index >= this.sumArtical){
			this.index = 0;
		}
		var artical=$(this.articals[this.index]);
		this.swipe(artical);
	}
	//点击前一个
	function prev() {
		this.index--;
		if(this.index < 0){
			this.index = this.sumArtical - 1;
		} 
		var artical = $(this.articals[this.index]);
		this.swipe(artical);
	}
})(jQuery);

