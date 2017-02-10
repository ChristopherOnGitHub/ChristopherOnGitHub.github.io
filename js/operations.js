/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    var content = $("#content");

    $("#sg").click(function (event) {
        content.empty();
        content.append("<center><img src='img/Guild.jpg' style='width: 60%; length: 40%; padding-bottom: 20px'></center>");
        content.append("The guild is a 12 week (not including pre-work) course that teaches full-stack web development. \n\
        Students choose between Java or .NET curriculums. I just got done taking the September 2016 Java course in Lousville, KY. \n\
        Along with java we learn many other technologies such as git, hibernate, IDEs, Ajax, Json, Spring security, Atlassian tools, and more. \n\
        For more information on the software guild click the button below. ");
        content.append("</br>");
        content.append('<center><a href="http://www.thesoftwareguild.com/about/" \n\
        class="Link">Click here to learn more</a></center>');
    });

    $("#ghub").click(function (event) {
        content.empty();
        content.append("Follow the link below to view my github repository. This is my personal use repository. Inside is a collection of all of the");
        content.append(" projects from during my time at the software guild. This includes everything from basic java console applications all the way up to full-stack web applications");
        content.append(" I am particularly proud of the 'capstone' assignment. This project was assigned as a group project");
        content.append(" to be created in an agile workflow in teams of four. You will also find the code for this website. ");
        content.append("</br>");
        content.append('<center><a href="https://github.com/ChristopherOnGitHub" \n\
        class="Link">Go to my GitHub</a></center>');
    });

    $("#lin").click(function (event) {
        content.empty();
        content.append("You can find more information about myself on my LinkedIn profile.\n\
        My LinkedIn profile will also contain links to my github, my posted resume, and other resources.\n\
        Please do not hesitate to send me a message or send me a connection request.");
        content.append("</br>");
        content.append('<center><a href="https://www.linkedin.com/in/christopher-floyd-55a658130" \n\
        class="Link">Go to my linkedIn profile</a></center>');
    });

    $("#resume").click(function (event) {
        content.empty();
        content.append("<img src='img/ResumePage1.jpg' style='width: 90%; length: 90%'>");
        content.append("</br></br>");
        content.append("<img src='img/ResumePage2.jpg' style='width: 90%; length: 90%'>");
    });

    $("#hackrank").click(function (event) {
        content.empty();
        content.append("I have been using an online resource called HackerRank to stay sharp. HackerRank gives users\n\
            a challenge to complete in a given language. It is also a networking resource. Once again, please feel free to connect with me\n\
            on this site if you already have a profile.");
        content.append("</br>");
        content.append('<center><a href="https://www.hackerrank.com/floydachris" class="Link">Go to my HackerRank profile</a></center>');
    });
});

