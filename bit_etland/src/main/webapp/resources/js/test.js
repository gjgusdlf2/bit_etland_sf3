var app=app||{};
app.path=(()=>{
	var init=x=>{
		onCreate();
		app.session.init(x);
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{
	};
	return {init:init};
})();
app.session=(()=>{
	onCreate(x);
	var onCreate=x=>{
		sessionStorage.setItem('ctx',x);
		setContentView();
	};
	varContentView=()=>{
		
	};
	return {init:init};
})();
app.$={
		ctx: ()=>{return sessionStorage.getItem('ctx')}
}; 