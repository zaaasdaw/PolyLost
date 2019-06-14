
var elementos1 = document.getElementsByClassName("agregarImagen"); 

elementos1[0].onmouseover = function cambiarBorde(){
	$(this).css("border","6px solid #7ebd26");
}
elementos1[0].onmouseout = function cambiarBorde(){
	$(this).css("border","6px solid #2874A6");
}

var elementos2 = document.getElementsByClassName("icono-imagen"); 
elementos2[0].onmouseover = function aparecerImg(){
	var elementos3 = document.getElementsByClassName("im");
    $(elementos3[0]).css('display', 'inline-block');
}

/*elementos1[0].onmouseout = function desaparecerImg(){
	var img = document.getElementById("imagen");
	$(this).remove(img);
}*/
