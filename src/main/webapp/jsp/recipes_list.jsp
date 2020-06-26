<%--
  Created by IntelliJ IDEA.
  User: alex
  Date: 23.06.2020
  Time: 21:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../css/general_styling.css">
    <link rel="stylesheet" href="../fontawesome/css/all.css">
    <script rel="script" src="../js/recipes_list.js"></script>
    <link rel="icon" href="../images/icons_logo/icon.png" type="image/png">
    <title>Mittagessen - Trail-Mix</title>
</head>
<body>
<div class="wrapper" id="wrapper">
    <img class="bg-image" src="../images/bg/wood-wallpaper.jpg" alt="bg-image">

    <jsp:include page="include/dynamic/header.jsp"/>

    <div class="regular-top-content-wrapper">
        <div class="regular-top-content-block" id="top-text">
            <h1 class="centered">Übersicht unserer studentenfreundlichen Rezepte</h1>
            <div class="recipes-overview-wrapper scrollbar">

                <div id="recipes-filtered-list">
                </div>

            </div>
        </div>
    </div>

        <%@include file="include/static/footer.jsp" %>

</div>

</body>
</html>