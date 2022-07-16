import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService{

	private categorias:Heroe[]= [

    {
      nombre: "Salud",
      bio: "Los pensamientos y emociones alteran las celulas, segun el Dr. en Biologia Brutson. Podemos curarnos a nosotros mismo con el poder de nuestos pensamientos ",
      img: "assets/img/health1.png",
      aparicion: "1941-11-01",
      casa:"DC",
      url:"../components/heroes/salud/salud.component.html"
    },
    {
      nombre: "Amor",
      bio: "Atraemos lo que somos y llamamos en la misma sintonias que vibra nuestro ser" ,
      img: "assets/img/love1.png",
      aparicion: "1939-05-01",
      casa:"DC",
      url:"../components/heroes/amor/amor.component.ts.component.html"
    },
    
   
    {
      nombre: "Dinero",
      bio: "Dinero,dinero,dinero... al pronunciarlas uno mismo se da cuenta que emociones se activa automaticamente , lo que indica que relación tienes con el dinero.",
      img: "assets/img/simbolo1.jpg",
      aparicion: "1962-05-01",
      casa:"Marvel",
      url:"../components/heroes/dinero/dinero.component.html"
    },
    {
      nombre: "Kinesis",
      bio: " Las facultades mentales son nuestras habilidades dormidas que con la práctica y dedicación se logra manifestarlas, en este camino en esta sección se enseñara varias técnias aplicadas proveniente de  de terceras personas experiencias personas",
      img: "assets/img/wolverine1.png",
      aparicion: "1940-06-01",
      casa: "DC",
      url:"../components/heroes/salud/salud.component.html"

    },
    {
      nombre: "Biokinesis",
      bio: "El adn esta conformado de información que es tranferida en generaciones, dicha información puede ser cambiada por el poder del subconsciente.",
      img: "assets/img/bio1.png",
      aparicion: "1962-08-01",
      casa: "Marvel",
      url:"../components/heroes/salud/salud.component.html"
    },
    {
      nombre: "Hacia lo desconocido ",
      bio: " Viajar por los sueños, experimentar viajar por los planos astrales, teletransportarse entre otras experiencias descrita por cientos de personas hace que lo que muchos les parece imposible sea un vivencia transedental ",
      img: "assets/img/energia1.png",
      aparicion: "1974-11-01",
      casa: "Marvel",
      url:"../components/heroes/salud/salud.component.html"
    }
  ];




	constructor(){

	 }

	 getHeroes():Heroe[]{

	 	return this.categorias;
	 }

   getHeroe(idx:string){
     return this.categorias[ idx ];
   }
}


export interface Heroe{

	nombre: string;
	bio: string;
	img:string;
	aparicion:string;
	casa: string;
  url:string;



};