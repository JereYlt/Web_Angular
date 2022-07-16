/*=============================================
=           OBJETO CON LAS PROPIEDADES
        =
=============================================*/

var p = {

paginacion = document.querySelectorAll('#paginacion li')

}


/*=============================================
=           OBJETO CON LOS MÉTODOS DEL SLIDE
        =
=============================================*/


var m ={

	inicioSlide: function(){


		for (var i = 0; i < p.paginacion.length; i ++){

			p.paginacion[i].addEventListener("click", m.paginacionSlide)
		}
		
	},

	paginacionSlide: function(item){

		console.log("item", item);
	}
}


m.inicioSlide();