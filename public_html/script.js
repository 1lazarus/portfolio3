/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".practice").css("background-color", "indigo");
    $("p span:first-child").css("background-colo","orange");
    $("div p:last-child").css("background-color","cyan");
    $('#onebutton').bind('click',alertButtonClick);
    $('#textBox1').bind('blur',onBlurEvent)
                  .bind('focus',onFocusEvent)
                  .bind('onmousedown', onMDownEvent)
                  .bind('onmouseup', onMUpEvent)
                  .bind('change', onChangeEvent);
});
function alertButtonClick(){
    alert("There was a button clicked");
}

function onBlurEvent(){
    $("#second").html("You left the box");
}
