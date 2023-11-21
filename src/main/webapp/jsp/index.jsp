<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Area Checker</title>
  <meta name="viewport" content="width=device-width initial-scale=1.0">
  <script
          src="https://code.jquery.com/jquery-3.7.1.js"
          integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
          crossorigin="anonymous"></script>
  <script>const ctx = "${pageContext.request.contextPath}"</script>
  <script type="module" src="${pageContext.request.contextPath}/resources/js/main.js"></script>
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/style.css">
  <link href="https://fonts.cdnfonts.com/css/akrobat" rel="stylesheet">
</head>
<body>
  <%@include file="components/header.jsp" %>

  <div class="header-container">
    <h1 class="header">Lab 1 Web</h1>
  </div>
  <div class="area-form-container">
    <div class="area-container">
      <%@include file="components/area.jsp" %>
    </div>
    <div class="form-container">
      <%@include file="components/form.jsp" %>
    </div>
  </div>
  <div class="results-table-container">
    <%@include file="components/results-table.jsp" %>
  </div>
</body>
</html>