/*
    Author: Abbas Abdulmalik
    Creation Date: February 15, 2016
    Title: First Phone gap app
    Revised: February 22, 2016
    Purpose: get used to phone gap
    Notes:
*/
var $ = lib;

window.onload = resize;
window.onresize = resize;
//---------------------------------
$("#menu").hover(overMenu, offMenu);
function overMenu(){
    $("#menu").css("color","white");
}
function offMenu(){
    $("#menu").css("color","lightblue");    
}
//---------------------------------
function resize(){
    var size = window.innerWidth;
    var screen = window.screen.width;
    var root = document.documentElement;
    root.style.fontSize = (15 + size/200) + "px";
}






