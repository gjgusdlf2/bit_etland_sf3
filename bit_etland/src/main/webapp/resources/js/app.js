var app = app || {};
app.path = (()=>{
	let init = x =>{
		app.session.init(x);
		alert(app.$.ctx())
		onCreate();
	};
	let onCreate  = () =>{
		setContentView();
	};
	let setContentView = () =>{
	};
	return {
		init : init
	};
})();

app.session = (() => {
	let init = x =>{
		onCreate(x);
	};
	let onCreate = x =>{
		sessionStorage.setItem('ctx',x);
		sessionStorage.setItem('js',x+'/resources/js');
		sessionStorage.setItem('img',x+'/resources/img');
		sessionStorage.setItem('css',x+'/resources/css');
	};
	let getPath = x =>{
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