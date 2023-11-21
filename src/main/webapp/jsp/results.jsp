<%@ page import="me.r3tnu.lab2web.PointWrapper" %>
<%@ page import="java.time.LocalDateTime" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ page import="java.time.LocalDateTime" %>
<%@ page import="java.time.Duration" %>
<%@ page import="java.time.format.DateTimeFormatter" %>

<% PointWrapper point = (PointWrapper) request.getAttribute("result"); %>
<% final DateTimeFormatter CUSTOM_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"); %>
<tr>
    <td class="x-result"> <%= point.getX() %> </td>
    <td class="y-result"> <%= point.getY() %> </td>
    <td class="r-result"> <%= point.getR() %> </td>
    <td class="hit-result"> <%= point.getResult() ? "Hit" : "Miss" %> </td>
    <td> <%=((LocalDateTime) request.getAttribute("endTime")).format(CUSTOM_FORMATTER) %></td>
    <td> <%=Duration.between((LocalDateTime) request.getAttribute("startTime"), (LocalDateTime) request.getAttribute("endTime")).toMillis()%> ms</td>
</tr>
