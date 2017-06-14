define(['jquery','template'],function($,template){
	//加载列表数据
	$.ajax({
		type:'get',
		url:'/api/teacher',
		dataType:'json',
		success:function(data){
			console.log(data);

			var html=template('teacherListTpl',{list:data.result});
        	$('#teachList').html(html);
		}
	});
});