<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--
	@작성자: 허현일 hahy77@naver.com
	@작성일자: 2019. 3. 12. 오후 4:50:00
	@파일명: *.jsp
	@기능:
-->
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>비트 전자랜드</title>
<link rel="stylesheet" href="${css}/home/reset.css "/> 
 <link rel="stylesheet" href="${css}/home/global.css" /> 
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
 <link rel="stylesheet" href="${css}/home/index.css" />
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
 <script src="${js}/app.js"></script>
</head>

<body>
<div class="grid-container">
  <div class="item1" id="header">
  </div>
  <div class="item2" id="menu">
  </div>
  <div class="item3" id="main">
  </div>  
  <div class="item4" id="right">
  </div>
  <div class="item5" id="footer">
  </div>
</div>
</body>
<script>
app.context.init('${ctx}')
</script>
</html>