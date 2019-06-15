
var elementos1 = document.getElementsByClassName("agregarImagen"); 

elementos1[0].onmouseover = function cambiarBorde(){
	var elemento = document.getElementById("agregarImagen");
	$(this).css("border","6px solid #7ebd26");
	$(elemento).css("display","inline-block");
}

elementos1[0].onmouseout = function cambiarBorde(){
	var elemento = document.getElementById("agregarImagen");
	$(this).css("border","6px solid #2874A6");
	$(elemento).css("display","none");
}



