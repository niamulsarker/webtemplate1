$(document).ready(function(){

var config = document.querySelector('.Mymixitup');
var mixer = mixitup(config);

});

$(function(){

  $('.circlechart').circlechart();

});

$(window).on('scroll',function(){
	
var wind =$(window);
var sticky =$('.Navbar_Div');
var scroll = wind.scrollTop();
 if (scroll < 600){
	 sticky.removeClass('sticky');
 } else {
	 sticky.addClass('sticky');
 }

});

function OpenNav() {
	
	document.querySelector('#MyNav').style.width= "100%";
}

function CloseNav() {
	
	document.querySelector('#MyNav').style.width= "0%";
}

