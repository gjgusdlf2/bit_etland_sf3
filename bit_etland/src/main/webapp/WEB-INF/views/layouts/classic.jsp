<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>비트 전자랜드</title>
<link rel="stylesheet" href="${css}/home/reset.css "/> 
 <link rel="stylesheet" href="${css}/home/global.css" /> 
 <style>
 .item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }
.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}
.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
 </style>
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

</head>
<body>
<div class="grid-container">
  <div class="item1">
  	<tiles:insertAttribute name="header"/>
  </div>
  <div class="item2">
  	<tiles:insertAttribute name="menu"/>
  </div>
  <div class="item3">
  	<tiles:insertAttribute name="main"/>
  </div>  
  <div class="item4">
  	<tiles:insertAttribute name="right"/>
  </div>
  <div class="item5">
  	<tiles:insertAttribute name="footer"/>
  </div>
</div>

</body>
</html>