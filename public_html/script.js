/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".practice").css("background-color", "red");
    $("p span:first-child").css("background-colo","orange");
    $("div p:last-child").css("background-color","cyan");
    $('#oneButton').bind('click',alertButtonClick);
    $('p').bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
    $('#twoButton').bind('dblclick',dblClickedMe);
    $('#replaceWText').bind('click',replaceWText);
    $('#removePara').bind('click',remoAPara);
   // $("form").submit(function()){alert("Submit button clicked")};
//    $('#textBox1').bind('blur',onBlurEvent)
//                  .bind('focus',onFocusEvent)
//                  .bind('onmousedown', onMDownEvent)
//                  .bind('onmouseup', onMUpEvent)
//                  .bind('change', onChangeEvent);
//          $(window).resize(resizeWindow);
});
function removeAPara(){
    $('#randPara p:last').remove();
}
function addParra(){
    $('randPara').append('<p>ADDED</p>');
}
function replaceWText(){
    $('replaceWtext').text('Replaced!');
}
function alertButtonClick(){
    alert("There was a button clicked");
}

function mouseOverMe(){
    $(".practice").html("You put your cursor on my logo");
}

function mouseOutMe(){
    $("second").html("You stopped touching my logo");
}

function dblClickedMe(){
    $("second").html("You double clicked my button");
}


//function onBlurEvent(){
//    $("#second").html("You left the box");
//}
//
//function onFocusEvent(){
//    $("#second").html("You left the box");
//}
//function onMDownEvent(){
//    $("#second").html("You left the box");
//}

//function onMUpEvent(){
//    $("#second").html("You left the box");
//}
//function onChangeEvent(){
//    $("#second").html("You left the box");
//}
//function resizedWindow(){
//    $("#second").html("Window was resized W:"+$(window).width());
//}
