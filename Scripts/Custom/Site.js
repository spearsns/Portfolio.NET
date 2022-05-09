$(document).ready(function () {
    var url = window.location.href;

    $(".nav-item").removeClass("active");
    if (url.indexOf("Links") > 0) $("#linksBtn").addClass("active");
    else if (url.indexOf("Projects") > 0) $("#projectsBtn").addClass("active");
    else if (url.indexOf("Templates") > 0) $("#templatesBtn").addClass("active");
    else if (url.indexOf("About") > 0) $("#aboutBtn").addClass("active");
    else if (url.indexOf("Contact") > 0) $("#contactBtn").addClass("active");
    else $("#homeBtn").addClass("active");
});