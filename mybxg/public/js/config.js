requirejs.config({
	baseUrl:'/public/assets',
	paths:{
		jquery:'jquery/jquery.min',
		bootstrap:'bootstrap/js/bootstrap.min',
		cookie:'jquery-cookie/jquery.cookie',
		nprogress:'nprogress/nprogress',
		template:'artTemplate/template-web',
		tealist:'../js/teacher-list',
		teaadd:'../js/teacher-add',
		index:'../js/index',
		util:'../js/util',
		common:'../js/common',
		login:'../js/login'
	},
	shim:{
		bootstrap:{
			deps:['jquery']
		}
	}
});