define(['jquery'],function($){
	return {
		setMenu:function(pathname){
			$('.aside .navs a').removeClass('active');
			$('.aside .navs a[href="'+pathname+'"]').addClass('active');
		},
		qs:function(attr,param){
			// ?abc=123&flag=456
			var retValue;
			var p=param.substring(1);
			var arr=p.split('&');
			arr.forEach(function(element,index){
				var kv=element.split('=');
				if(attr==kv[0]){
					retValue=kv[1];
					return;
				}
			});
			return retValue;
		}

	}
});