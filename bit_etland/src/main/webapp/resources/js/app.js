var app = app || {};
app.path = (()=>{
	var init = x =>{
		app.session.init(x);
		alert(app.$.ctx())
		onCreate();
	};
	var onCreate  = () =>{
		setContentView();
	};
	var setContentView = () =>{
/*		$('#header').empty().text('헤더');
		$('#menu').empty().text('메뉴');
		$('#main').empty().text('메인');
		$('#rigt').empty().text('라이트');
		$('#footer').empty().text('푸터');
		$('#header').html('<h1>헤더</h1>');
		$('#menu').html('<h1>메뉴</h1>');
		$('#main').html('<h1>메인</h1>');
		$('#rigt').html('<h1>라이트</h1>');
		$('#footer').html('<h1>푸터</h1>');*/
	};
	return {
		init : init
	};
})();

app.session = (() => {
	var init = x =>{
		onCreate(x);
	};
	var onCreate = x =>{
		sessionStorage.setItem('ctx',x);
		sessionStorage.setItem('js',x+'/resources/js');
		sessionStorage.setItem('img',x+'/resources/img');
		sessionStorage.setItem('css',x+'/resources/css');
	};
	var getPath = x =>{
		return sessionStorage.getItem('ctx');
	};
	
	return {init : init,
			getPath : getPath
	}
})();

app.$ = (()=>{
	return {
		ctx : ()=>{return sessionStorage.getItem('ctx')},
		js : ()=>{return sessionStorage.getItem('js')},
		img : ()=>{return sessionStorage.getItem('img')},
		css : ()=>{return sessionStorage.getItem('css')}
		};
})();