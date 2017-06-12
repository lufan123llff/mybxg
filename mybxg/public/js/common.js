// 功能模块
define(["jquery",'template',"cookie"],function($,template){
    // 控制左侧导航折叠
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
    //退出登录
    $('#logout').click(function(){
        $.ajax({
            type:'post',
            url:'/api/logout',
            dataType:'json',
            success:function(data){
                    console.log(data);
                    if(data.code==200){
                        location.href="/teacher/add";
                    }   
            }
        });
        
    });
        // 登录验证
        var pathname=location.pathname;
        if(pathname!='/login'&&!$.cookie('PHPSESSID')){
         location.href='/login';
        }
// 登录信息
    var loginInfo=$.cookie('loginInfo')&&JSON.parse($.cookie('loginInfo'));
    
    console.log(loginInfo);

    if(loginInfo){
     //渲染页面
     var loginTpl='<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
     var html=template.render(loginTpl,loginInfo);
     $('#loginInfoTpl').html(html);
     // $('.aside.profile').find('img').attr('src',loginInfo.tc_avatar);
     // $('.aside.profile').find('h4').text(loginInfo.tc_name);
    }
    })


    
	










