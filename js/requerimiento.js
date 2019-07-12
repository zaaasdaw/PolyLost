$(document).ready(function() {
	$.ajax({
        url: "../data/objetos.xml",
        success: function(respuesta) {
            console.log("entro en el requqrimiento")
            $(respuesta).find("objeto").each(function() {
            	var contenedor=$("<div></div>").addClass("contenedor");

            	var imagen=$("<img></img>").addClass("imagen");
            	imagen.attr("src",$(this).find("src").text());
            	imagen.attr("title",$(this).find("title").text())
            	console.log($(this).find("title").text())
            	var overlay=$("<div></div>").addClass("overlay")

            	var texto=$("<div></div>").addClass("text")
            	texto.text($(this).find("nombre").text())

            	overlay.append(texto);
            	contenedor.append(imagen);
            	contenedor.append(overlay);

            	$("div#galeria").append(contenedor)
            })
        }
    });
});