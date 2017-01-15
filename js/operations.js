/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function (){
    
    var content = $("#content");
    
    $("#sg").click(function (event) {
      content.empty();
      content.append("<center><img src='img/Guild.jpg' style='width: 60%; length: 40%; padding-bottom: 20px'></center>");
      content.append("The guild is a 12 week (not including pre-work) course that teaches full-stack web development. \n\
        Students choose between Java or .NET curriculums. I just got done taking the September 2016 Java course in Lousville, KY. \n\
        Along with java we learn many other technologies such as git, hibernate, IDEs, Ajax, Json, Spring security, Atlassian tools, and more. \n\
        For more information look at the guild's offical about section: ");
      content.append("<a href='http://www.thesoftwareguild.com/about/' target='_blank'>HERE</a>");
    });
    
    $("#ghub").click(function (event) {
      content.empty();
      content.append("Follow the link below to view my github repository. This is my personal use repository. Inside is a collection of all of the");
	  content.append(" projects from during my time at the software guild. This includes everything from basic java console applications all the way up to full-stack web applications");
	  content.append(" I am particularly proud of the 'capstone' assignment. This project was assigned as a group project");
	  content.append(" to be created in an agile workflow in teams of four. You will also find the code for this website. " );
      content.append("<a href='https://github.com/ChristopherOnGitHub' target='_blank'> Click Here To View My GitHub Profile</a>");
    });
    
    $("#lin").click(function (event) {
      content.empty();
      content.append("My linkedIn account is available to view");
      content.append("<a href='https://www.linkedin.com/in/christopher-floyd-55a658130' target='_blank'> Here</a>");
      content.append(". You can find more information about myself along with all of the information\n\
         on this website. Please do not hesitate to send me a message or send me a connection request.");
    });
    
    $("#resume").click(function (event) {
      content.empty();
      content.append("<img src='img/ResumePage1.jpg' style='width: 90%; length: 90%'>");
      content.append("</br></br>");
      content.append("<img src='img/ResumePage2.jpg' style='width: 90%; length: 90%'>");
    });
});


