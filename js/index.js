$(function(){
	$(".shoppingCarball").text(storage_getCar().length);
	var mySwiper = new Swiper('.swiper-container', {
					autoplay: 2000,//可选选项，自动滑动
					//loop:true,
					pagination : '.swiper-pagination',
				})
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getBanner.php",
		dataType:"jsonp",
		success:function(data){
			//console.log(data);
			/*var data=JSON.parse(data[1][3]);
			console.log(data[0]);*/
			//取轮播div
			var $div=$(".swiper-slide");
			//console.log($div.length);
			$.each(data,function(i){
				var data1=data[i].goodsBenUrl;
				var data2=JSON.parse(data1);
				var img=new Image();
				img.src=data2[0];
				var $imgBox=$("<div>loading......</div>");
				$div.eq(i).append($imgBox);
				img.onload=function(){
					$div.eq(i).html(img);
				}
			})
		}
	})
	classDetail();
	search();
})










