define(['jquery','cookie'],function($){
	$('#login').click(function(){
            $.ajax({
                type:'post',
                url:'/api/login',
                data:$('#formId').serialize(),
                dataType:'json',
                success:function(data){
                    console.log(data);
                    if(data.code==200){
                      $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                        location.href='/index/index';
                    }
                }
            });
            return false;
        });
});