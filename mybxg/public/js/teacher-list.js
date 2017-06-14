define(['jquery','template','util','bootstrap'],function($,template,util){
	//处理侧边栏高亮显示效果
	util.setMenu(location.pathname);
	//加载列表数据
	$.ajax({
		type:'get',
		url:'/api/teacher',
		dataType:'json',
		success:function(data){
			//渲染页面
			var html=template('teacherListTpl',{list:data.result});
        	$('#teachList').html(html);


        	//讲师管理查看功能
			previewTeacher();
			//讲师管理注销和启用功能
			enableDisableTeacher();
        	function previewTeacher(){
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
	        		return false;
	        	});
					
			}
			function enableDisableTeacher(){
				$('#teachList').find('.enableDisable').click(function(){
					var that=this;
					var td=$(this).closest('td');
					var tcId=td.attr('data-id');
					var tcStatus=td.attr('data-status');
					$.ajax({
						type:'post',
						url:'/api/teacher/handle',
						data:{tc_id:tcId,tc_status:tcStatus},
						dataType:'json',
						success:function(data){
							console.log(this);//这里的this指的是ajax对象
							td.attr('data-status',data.result.tc_status);
							if(data.result.tc_status==0){
								$(that).text('注销');
							}else{
								$(that).text('启用');
							}

						}
					});
				});
			}
		}
        		
        	

		
	});

	
});