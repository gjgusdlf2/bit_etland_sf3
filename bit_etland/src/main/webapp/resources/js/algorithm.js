var algo=algo||{};
algo=(()=>{
	let init=x=>{
		alert('------- 1--------> '+x);
		algo.$.init(x);
	};
	let onCreate=()=>{
		alert('------6 $.ctx()완성---------'+$.ctx());
		
		setContentView();
		$.getScript($.js()+'/compo.js',()=>{
		$('#nav').children().eq(0).html($$.a({id:'seq',url:'#'}).text('수열'))
		$('#nav').children().eq(1).html($$.a({id:'math',url:'#'}).text('수학'))
		$('#nav').children().eq(2).html($$.a({id:'sort',url:'#'}).text('정열'))
		$('#nav').children().eq(3).html($$.a({id:'arr',url:'#'}).text('배열'))
		$('#nav').append($$.li({id: ''}));
		$('#nav').children().eq(4).html($$.a({id: 'app'}).text('응용'));
		$('#que_1').text('수열 1 - 1+2+3+4+...+100합까지의 합계 (do~while)')
		$('#que_2').text('수열 2 - 1-2+3-4+5-6+...+99~100합까지의 합계(do~while,while,if)')
		})
	};
	let setContentView=()=>{};
	return {init:init,
		onCreate:onCreate};
})();
algo.$=(()=>{
	return {
		init : (x)=>{
			alert('--------2---------- '+x);
			$.getScript(x+'/resources/js/router.js',()=>{
				alert('----------3---------'+x);
				$.extend(new Session(x));
				alert('------5 $.ctx()완성---------'+$.ctx());
				algo.onCreate();
			})
		}
	};
})();