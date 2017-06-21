define(['jquery','util','template'],function($,util,template){
	// 导航选中
	util.setMenu('/teacher/list');
	// 提交表单处理
	function submitForm(url){
		$('#addTeacherBtn').click(function(){
		// console.log(0);
		// alert(1);
		$.ajax({
			type:'post',
			url:url,
			data:$('#addTeacherForm').serialize(),
			dataType:'json',
			success:function(data){
				// console.log(data);
				if(data.code==200){
					location.href='/teacher/list';
				}
			}
			});
		});
	}
	
	// 获取参数中tc_id
	var tcId=util.qs('tc_id',location.search);
	if(tcId){
		// 编辑讲师操作---把数据填充到表单中
		// 根据ID查询数据
		$.ajax({
			type:'get',
			url:'/api/teacher/edit',
			data:{tc_id:tcId},
			dataType:'json',
			success:function(data){
				$('#navFlag').html('讲师编辑');
				console.log(data);
				data.result.operateFlag='编辑';
				var html=template('teacherFormTpl',data.result);
				$('#teacherFormInfo').html(html);
			
					// 编辑提交
					submitForm('/api/teacher/update');
			
					
			
			}
		});

	}else{
		// 添加讲师操作-----填充一个空的表单
		var html=template('teacherFormTpl',{operateFlag:'添加',tc_gender:1});
		$('#teacherFormInfo').html(html);
		$('#navFlag').html('讲师添加');
		// 添加提交
		submitForm('/api/teacher/add');

	}
});