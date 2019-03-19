var algo=algo||{};
algo=(()=>{
	let init=x=>{
		algo.$.init(x);
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.getScript($.js()+'/compo.js',()=>{
		$('#nav').children().eq(0).html($$.a({id:'seq',url:'#'}).text('수열'))
		$('#nav').children().eq(1).html($$.a({id:'math',url:'#'}).text('수학'))
		$('#nav').children().eq(2).html($$.a({id:'arr',url:'#'}).text('배열'))
		$('#nav').children().eq(3).html($$.a({id:'coll',url:'#'}).text('자료구조'))
		$('#nav').append($$.li({id: ''}));
		$('#nav').children().eq(4).html($$.a({id: 'app'}).text('응용'));
		$('#que_1').text('등차수열의 합계')
		$('#que_2').text('등비수열의 합계')
		inputForm();
		$('#answer_btn1').text('결과').addClass('cursor').click(()=>{
			$.ajax({
				url : $.ctx()+'/algo/seq/1',
				type : 'post',
				data : JSON.stringify(
						{start: $('#start').val(),
							end: $('#end').val(),
						diff: $('#diff').val()}),
				dataType : 'json',
				contentType : "application/json", 
				success : d=>{
					alert('넘어온 문제번호 : '+d.result);
					$('#result').html($$.h({id : 'h_res',num : '2'})
							.text('결과값: '+d.result));
				},
				error : e=>{
					alert('AJAX 실패');
				}
			});
		});
		$('#answer_btn2').text('리셋').addClass('cursor').click(()=>{
			inputForm();
		});
		})
	};
	let inputForm=()=>{
		$('p#result').html($$.form({id: 'form'}));
		$('form#form').html($$.div({id: 'div_1'}).addClass('form-group'));
		$('div#div_1').html($$.label({name: 'lab_1'}).text('시작 값 :'))
						.append($$.input({type: 'text',id :'start'}));
		$('form#form').append($$.div({id: 'div_2'}).addClass('form-group'));
		$('div#div_2').html($$.label({name: 'lab_2'}).text('한계 값 :'))
						.append($$.input({type: 'text',id :'end'}));
		$('form#form').append($$.div({id: 'div_3'}).addClass('form-group'));
		$('div#div_3').html($$.label({name: 'lab_3'}).text('공차 :'))
						.append($$.input({type: 'text',id :'diff'}));
	}
	return {init:init,
		onCreate:onCreate};
})();
algo.$={
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				algo.onCreate();
			})
		}
};