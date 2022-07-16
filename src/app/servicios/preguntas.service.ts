

import { Injectable } from '@angular/core';

@Injectable()
export class PreguntasService{

	private preguntas:Pregunta[]= [


    {
      preg: "¿Qué son los audios  subliminales?" ,
      resp: "Un audio  subliminal contiene  mensajes  diseñados pasar por debajo  de los límites normales de percepción consciente"
       , target:"#collapseOne",
       id:  "collapseOne"  ,
       controls: "collapseOne"  ,
       heading: "heading1",
        aria:"heading1"
    },
    
   {
      preg: "El subliminal es la música" ,
      resp: "No, la música solo es para distraer a la mente consciente y relajarla para que no interfiera en el “análisis” del mensaje  que se está enviando al subconsciente. Esta música contiene  tono binaural e isócronos  (en algunos casos)  que  permitirá  sincronizar las ondas cerebrales y poner la mente en estado de relajación ideal para ser sugestionada."
      , target:"#collapsedDos",
      id:  "collapseDos" ,
      controls:"collapseDos" ,
      heading: "heading2",
      aria:"heading2"  
    },
    {
      preg: "¿Cómo funciona la programación subliminal?" ,
      resp: "El proceso es el siguiente : Los mensajes subliminales en el audio, contienen frases en positivo para que tu mente subconsciente adopte un tipo de creencia en beneficio para el objetivo que se desea alcanzar. Estos mensajes serán la nueva creencia en tu mente subconsciente. De esta manera, tu mente subconsciente hará el trabajo según la nueva creencia. Para el proceso subliminal se complete en forma correcta, la mente consciente NO debe interferir o sabotear la nueva creencia que se está sembrando en la mente subconsciente. Una de las formas de sabotear el proceso, es pensar y sentir de manera negativa respecto al objetivo deseado. Lo ideal sería que mientras se está en la etapa de la programación mental, la mente consciente debe pensar y sentir en forma positiva que los cambios se están llevando y se llevó acabo. De esta forma la mente va creyendo y creando  su nueva realidad y manifestándolo. "
      , target:"#collapseTres",
      id:  "collapseTres" ,
      controls:"collapseTres" ,
      heading: "heading3",
      aria:"heading3"     
    },
    {
      preg: "¿Me da miedo, es peligroso los audios subliminales?" ,
      resp: "No deberías tener miedo y tampoco son peligrosos los audios subliminales que diseñamos ,  puedes comprobarlo en nuestro canal de YouTube los cientos de testimonios de gratitud. Los audios solo contienen música de relajación como puede ser de agua, lluvia, pájaros, música clásica, etc. Lo importante es el  tipo de mensaje subliminal en el audio. Ningún programa subliminal puede obligarte a realizar nada en contra de tu voluntad o tus ideas. Nuestros audios subliminales  contienen poderosos  mensajes de manera positiva para hacer el bien y  NO para hacer el mal. La única precaución que debes tener cuando escuches nuestros programas  es no conducir un automóvil o realizar actividades que requieran de tu atención, Ni sufrir de epilepsia o problemas del corazón  (esto es para los audios que contienen ondas alfas binaurales e isocronicas). Mientras para los audios silenciosos se puede escuchar en cualquier momento sin riesgo. recepción consciente"            
      , target:"#collapseCuatro",
      id:  "collapseCuatro",
      controls:"collapseCuatro",
      heading: "heading4",
      aria:"heading4" 
    },

    {
      preg: "¿Desde de qué edad se debe escuchar los audios subliminales?" ,
      resp: "No existe un rango de edad para escuchar nuestros audios subliminales.  Es preferible que sea supervisado por un adulto en los menores. Los mensajes subliminales que diseñamos contienen sugestiones positivas, algunas ondas binaurales e isocrònicas que son útiles para una mejor sugestión mental."
      , target:"#collapseCinco",
      id:  "collapseCinco",
      controls:"collapseCinco",
      heading: "heading5",
      aria:"heading5"      
    },

    {
      preg: "¿Por qué los audios subliminales del canal de YouTube es gratis?" ,
      resp: "Es de tipo  demostración para el público en general. De esta manera, puedan probar nuestros audios subliminales. Además, este conocimiento del poder del subconsciente es nuevo para la gran mayoría y nada mejor que las personas puedan ganar confianza probando nuestros audios subliminales y experimentando  resultados."
      , target:"#collapseSeis",
      id:  "collapseSeis",
      controls:"collapseSeis",
      heading: "heading6",
      aria:"heading6" 
      },

    {
      preg: "¿Cuánto tiempo por día debo escucharlos?" ,
      resp: "No hay un tiempo definido pero lo habitual y  recomendado es escucharlo 1 hora como mínimo. Eso incluye que se puede escucharlo por partes pero 1 hora mínimo por día. Se debe escucharlo todos los días sin saltarse uno. Si te es posible escucharlo más tiempo sería mucho mejor porque mayor cantidad de sugestión llega al subconsciente y por ende mejores resultados."
      , target:"#collapseSiete",
      id:  "collapseSiete",
     controls:"collapseSiete",
      heading: "heading7",
      aria:"heading7" 
      },

    {
      preg: "¿Cuántos audios subliminales distintos puedo escuchar?" ,
      resp: "Puedes escuchar varios. Cada persona es diferente y  tiene  reacciones  diferentes  a las  sugestiones auditivas, por eso no hay límites cuantos audios puedes escuchar. Se debe escuchar en distintos momentos del día."
      , target:"#collapseOcho",
      id:  "collapseOcho",
      controls:"collapseOcho",
      heading: "heading8",
      aria:"heading8"
      },
    {
      preg: "¿Es obligatorio escucharlo con audífonos?" ,
      resp: "Si, lo más recomendable es hacerlo con audífonos para poder escucharlo de manera relajada y calmada a  excepción de los audios silenciosos."
      , target:"#collapseNueve",
      id:  "collapseNueve",
       controls:"collapseNueve",
      heading: "heading9",
      aria:"heading9" 
    },

    {
      preg: "¿Puedo escuchar los audios subliminales mientras estoy durmiendo?" ,
      resp: "Si, puedes escucharlo justo antes de dormir y quedarte dormido con el audio subliminal. Si deseas potenciar nuestros audios subliminales debes hacerlo de manera relajada, visualizando de manera emotiva el objetivo deseado como si lo ya tuvieras viviendo en el presente."
      , target:"#collapseDiez",
      id:  "collapseDiez" ,
      controls:"collapseDiez" ,
      heading: "heading10",
      aria:"heading10"
    },
    {
      preg: ". ¿Cuánto tiempo debo esperar para ver resultados?" ,
      resp: "La mente de cada persona reacciona de diferente manera a las sugestiones subliminales. Desde el primer día ya muchas persona notan cambios sobre todo para cambios como cambiar color de ojos, eso lo puedes comprobar en los testimonios reales que hay en el canal de YouTube. En los cambios internos  desde la primera semana ya notaras cambios. Si deseas ver cambios  notorios, el promedio general es de 3  a 4 meses aproximadamente para cambios físicos."
      , target:"#collapseOnce",
      id:  "collapseOnce" ,
      controls:"collapseOnce" ,
      heading: "heading11",
      aria:"heading11"
    },
    {
      preg: "¿Puedo descargar el video que es audio subliminal del canal de YouTube? ¿Se pierde el subliminal si lo convierto a MP3?" ,
      resp: "Al estar los audios subliminales  en YouTube no da sobre entendido que es para descargarlo.  Nosotros no damos permiso en descargas ni distribución  fuera del canal de YouTube. Además, no garantizamos el mensaje subliminal  original  a cualquier conversión sobre estos audios subliminales. Nuestro propósito de poner audios subliminales de acceso libre en YouTube  es para que las personas valoren nuestro trabajo, comprueben y disfruten de la experiencia de activar sus poderes mentales con nuestros  audios subliminales desde el canal PleyadesM en YouTube."
      , target:"#collapseDoce",
      id:  "collapseDoce",
      controls:"collapseDoce",
      heading: "heading12",
      aria:"heading12" 

      },


    {
      preg: "¿Los cambios son permanentes? ¿Cuándo logro mi objetivo debo seguir escuchando el audio subliminal?" ,
      resp: "Si son permanentes, una vez que tu subconsciente obtiene  la nueva programación,  tu mente creerá que la nueva creencia es la realidad y seguirá con ese molde que fue programado. edadadsasadasaasaas"
     , target:"#collapseTrece",
      id:  "collapseTrece",
      controls:"collapseTrece",
      heading: "heading13",
      aria:"heading13" 
    },

    {
      preg: "¿Puedo escuchar otra música mientras escuchas el audio?" ,
      resp: "No, si vas a escuchar otra música no debes escuchar el audio subliminal. De igual forma, si vas a escuchar el audio subliminal no debes escuchar otra música en ese momento. Cuando termines de escuchar el audio subliminal ahí  si puedes escuchar otro tipo de  música."
      ,target:"#collapseCatorce",
      id:  "collapseCatorce" ,
      controls:"collapseCatorce" ,
      heading: "heading14",
      aria:"heading14"
    },
    {
      preg: "¿Tengo que ver el video todo el tiempo de escucharlo?" ,
      resp: "No  necesariamente, es opcional. Si ves la imagen,  lo recomendable es que te inspires con la imagen de sentir que tu deseo se hace realidad en el presente. Si solo vas a escucharlo, busca tener  los sentimientos de tener ese deseo cumplido."
     , target:"#collapseQuince",
      id:  "collapseQuince" ,
      controls:"collapseQuince" ,
      heading: "heading15",
      aria:"heading15"
    },
    {
      preg: "Siento un dolor de cabeza o mareos, cuando estoy escuchando el audio subliminal. ¿A qué se debe?" ,
      resp: "Lo normal es que sucede en los primeros días, el motivo es que algunos de nuestros audios subliminales contienen tonos isocronicos que ayudan a relajar al cerebro para estar en un mejor estado para la sugestión subliminal y mucha gente no está acostumbrada a este tipo de ondas. Pero no te preocupes, si este es tu caso debes seguir con la programación hasta que tu cerebro se acostumbre. "
     , target:"#collapseDieciseis",
      id:  "collapseDieciseis" ,
      controls:"collapseDieciseis" ,
      heading: "heading16",
      aria:"heading16"      
    },
    {
      preg: "¿A qué volumen debo escuchar estos audios?" ,
      resp: "Tú decides que volumen debes escuchar  pero se recomienda  a volumen medio, ni alto ni bajo. "
     , target:"#collapseDiecisiete",
      id:  "collapseDiecisiete",
      controls:"collapseDiecisiete",
      heading: "heading17",
      aria:"heading17"     
    },
    {
      preg: "¿Qué me garantiza que los mensajes subliminales no contienen mensajes dañinos?." ,
      resp: "Más que garantía podemos dar los testimonios reales de gratitud de nuestros seguidores en el canal de YouTube como resultado de experimentar los audios subliminales. La intención de crear audios subliminales desde el canal de YouTube  se basa creyendo en los principios del mentalismo y las leyes universales. Un principio importante es  hacer el bien al prójimo porque lo que uno siembra, cosecha. "
     ,  target:"#collapseDieciocho",
      id:  "collapseDieciocho",
      controls:"collapseDieciocho",
      heading: "heading18",
      aria:"heading18"      
    },
    {
      preg: "¿Los mensajes Subliminales tienen contradicciones?" ,
      resp: "Solo para las personas que sufren de epilepsia o ataques cardiacos NO deben escuchar los audios subliminales que contienen tonos binaurales e isocrònicos."
     ,  target:"#collapseDiecinueve",
      id:  "collapseDiecinueve",
      controls:"collapseDiecinueve",
      heading: "heading19",
      aria:"heading19"  
    },
    {
      preg: "¿Cómo puedo reconocer un audio  subliminal con tonos binaurales e isocrònicos?" ,
      resp: "Se puede reconocerlos con el tono similar a un zumbido constante."
    ,   target:"#collapseVeinte",
      id:  "collapseVeinte"   ,
      controls:"collapseVeinte"   ,
      heading: "heading20",
      aria:"heading20"   
    },
    {
      preg: "¿Cómo puedo tener resultados más rápidos?" ,
      resp: "El tiempo del   resultado es diferente en cada persona, la manera de obtener un cambio más rápido es elevar el nivel de la consciente, para comenzar este proceso se debe primero adquirir mayor conocimiento del poder de la mente. Un ejercicio importante es  la  visualización  emotiva, es decir hacer una imagen en tu mente viviendo y disfrutando emocionalmente tu objetivo  en el presente.  Cuanto más tiempo haces este ejercicio en compañía con nuestros audios subliminales veras resultados más rápidos."
     ,  target:"#collapseVeintiuno",
      id:  "collapseVeintiuno" ,
      controls:"collapseVeintiuno" ,
      heading: "heading21",
      aria:"heading21"     
    },
    {
      preg: "¿es necesario meditar o poner la mente en blanco al escuchar el audio subliminal?" ,
      resp: "Con enfocarte de manera positiva conscientemente es suficiente para comenzar a ver resultados."
     ,  target:"#collapseVeintidos",
      id:  "collapseVeintidos" ,
      controls:"collapseVeintidos" ,
      heading: "heading22",
      aria:"heading22"     
    },
    {
      preg: "¿Por qué no pones las frases que contienen los mensajes subliminales?" ,
      resp: "Al principio fue así pero luego al leer el comentario del conflicto (sus propios análisis) que provocada en las personas leyendo las frases se eliminó la publicación de las frases. Un ejemplo de conflicto  puede ser cuando se incluye una frase como: “ el dinero viene a mi vida fácil y rápidamente” el oyente como tiene una creencia particular acerca del dinero piensa así ;  pero el dinero se debe hacer con trabajo duro, al que madruga Dios le ayuda. Tienen un conflicto consciente al escuchar el audio saboteándolo. Las frases contenidas solo son de manera positivas, no incluye palabras del problema a resolver, ni palabras en negación, ni todo lo que le mente se puede imaginar para sabotear el objetivo."
     , target:"#collapseVeintitres",
      id:  "collapseVeintitres",
      controls:"collapseVeintitres",
      heading: "heading23",
      aria:"heading23"      
    },
    {
      preg: "¿Creo que algunos audios subliminales tienen objetivos  muy fantasioso para hacerlo realidad, ¿porque los publicas?" ,
      resp: "En cada persona está el decir que puede ser fantasioso o irrealista  porque si para uno que no cree es imposible, así lo será. En cambio,  para otra persona  que si cree será posible  y hará  realidad lo imposible con el poder de la fé. El poder de la fé que se desprende desde el subconsciente es registrado en centenares de libros, religiones y testimonios  en todo el mundo. “Porque al que cree TODO le es posible”,… Jesucristo. La mente lo es todo. Lo que pienses, en eso te conviertes.…. Buda Somos lo que pensamos, todo lo que somos se levanta con nuestros pensamientos. Con ellos, creamos el mundo.…  Buda "
     , target:"#collapseVeinticuatro",
      id:  "collapseVeinticuatro" ,
      controls:"collapseVeinticuatro" ,
      heading: "heading24",
      aria:"heading24"     
    }
   

    
  ];


	constructor(){

		console.log("Servicio listo para usar2!");

	 }

	 getPreguntas():Pregunta[]{

	 	return this.preguntas;
	 }

   getPregunta(idx:string){
     return this.preguntas[ idx ];
   }
}


export interface Pregunta{

	preg: string;
	resp: string;
  target:string;
  id: string;
  controls: string;
	heading: string;
  aria:string;
};