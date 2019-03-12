<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div>
<h1 style="margin-bottom: 100px;"> 고객 전용 </h1>
<a href="#" id="cust_join" >회원가입</a><br />
<a href="#" id="cust_login" >로 그 인</a><br />
</div>

    
<script src="${js}/oop.js"></script>
<script>
$('#emp_register').click(function(){
	location.assign('employee.do?cmd=move&page=register');
});
$('#emp_access').click(function(){
	location.assign('employee.do?cmd=move&page=access');
});
$('#cust_join').click(function(){
	location.assign('${ctx}/move/customer/signup');
});
$('#cust_login').click(function(){
	location.assign('${ctx}/move/customer/signin');
});
$('#oop_access').click(function(){
	// encap.main();
	test.main();
});
</script>






