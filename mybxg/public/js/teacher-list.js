define(['jquery','template','bootstrap'],function($,template){
	//加载列表数据
	$.ajax({
		type:'get',
		url:'/api/teacher',
		dataType:'json',
		success:function(data){
			//渲染页面
			var html=template('teacherListTpl',{list:data.result});
        	$('#teachList').html(html);
        	//点击查看按钮
        	$('#teachList').find('.preview').click(function(){
        		var tcId=$(this).closest('td').attr('data-id');
        		console.log(tcId);
        		$.ajax({
        			type:'get',
        			url:'/api/teacher/view',
        			data:{tc_id:tcId},
        			dataType:'json',
        			success:function(data){
        				console.log(data);
        				//去掉籍贯中的|
        				// data.result.tc_hometown=data.result.tc_hometown.replace(/[|]/g,' ');
        				// data.result.tc_hometown=data.result.tc_hometown.replace(/\|/g,' ');
        				data.result.tc_hometown=data.result.tc_hometown.split('|').join(' ');
        				//渲染模态框内容
        				var html=template('teacherModalInfoTpl',data.result);
        				$('#teacherModalInfo').html(html);
        				$('#teacherModal').modal();//手动打开模态框
        			}
        		});
        	});
		}
	});
});