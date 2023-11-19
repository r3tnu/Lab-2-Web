<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width initial-scale=1.0">
  <script type="module" src="<%=request.getContextPath()%>/resources/js/script.js"></script>
  <title>Area Checker</title>
  <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/style.css">
  <link href="https://fonts.cdnfonts.com/css/akrobat" rel="stylesheet">
</head>
<body>
  <%@include file="components/header.jsp" %>

  <h1 class="header">Lab 1 Web</h1>

  <%@include file="components/area.jsp" %>
  <%@include file="components/form.jsp" %>
  <%@include file="components/results-table.jsp" %>
</body>
</html>