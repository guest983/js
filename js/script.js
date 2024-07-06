function text_change(){
    document.getElementById('change_txt').innerHTML="how are you?";
}

// EXAMPLE #2

function change_msg(){
    document.getElementById('change_msg').innerHTML="I AM JAVASCRIPT";
}
// EXAMPLE #3
function show_date(){
    document.getElementById('date_time').innerHTML=Date();
}
// EXAMPLE #4
function change_color(){
    document.getElementById('change_color').style.color="red";
}
// EXAMPLE #5

function switchOn(){
  document.getElementById(pic_bulb).src="images/pic_bulbon.gif";
}

function switchOff(){
  document.getElementById(pic_bulb).src="images/pic_bulboff.gif";
}