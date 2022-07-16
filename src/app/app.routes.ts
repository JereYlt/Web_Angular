//MODULOS PRINCIPAL
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import { HeroeComponent} from './components/heroe/heroe.component';
import { SubliminalComponent } from './components/subliminal/subliminal.component';
import { FrecuenciasComponent } from './components/frecuencias/frecuencias.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';

//SALUD
import { SaludComponent } from './components/heroes/salud/salud.component';
import { Salud01Component } from '../app/components/heroes/salud/salud0/salud01/salud01.component';
import { Salud02Component } from '../app/components/heroes/salud/salud0/salud02/salud02.component';
import { Salud03Component } from '../app/components/heroes/salud/salud0/salud03/salud03.component';
import { Salud04Component } from '../app/components/heroes/salud/salud0/salud04/salud04.component';
import { Salud05Component } from '../app/components/heroes/salud/salud0/salud05/salud05.component';
import { Salud06Component } from '../app/components/heroes/salud/salud0/salud06/salud06.component';
import { Salud07Component } from '../app/components/heroes/salud/salud0/salud07/salud07.component';
import { Salud08Component } from '../app/components/heroes/salud/salud0/salud08/salud08.component';
import { Salud09Component } from '../app/components/heroes/salud/salud0/salud09/salud09.component';
import { Salud10Component } from '../app/components/heroes/salud/salud0/salud10/salud10.component';

//AMOR
import { AmorComponent } from './components/heroes/amor/amor.component';
import { Amor01Component } from './components/heroes/amor/amor0/amor01/amor01.component';
import { Amor02Component } from './components/heroes/amor/amor0/amor02/amor02.component';
import { Amor03Component } from './components/heroes/amor/amor0/amor03/amor03.component';
import { Amor04Component } from './components/heroes/amor/amor0/amor04/amor04.component';
import { Amor05Component } from './components/heroes/amor/amor0/amor05/amor05.component';
import { Amor06Component } from './components/heroes/amor/amor0/amor06/amor06.component';
import { Amor07Component } from './components/heroes/amor/amor0/amor07/amor07.component';
import { Amor08Component } from './components/heroes/amor/amor0/amor08/amor08.component';
import { Amor09Component } from './components/heroes/amor/amor0/amor09/amor09.component';
import { Amor10Component } from './components/heroes/amor/amor0/amor10/amor10.component';
import { Amor11Component } from './components/heroes/amor/amor0/amor11/amor11.component';
import { Amor12Component } from './components/heroes/amor/amor0/amor12/amor12.component';
import { Amor13Component } from './components/heroes/amor/amor0/amor13/amor13.component';
import { Amor14Component } from './components/heroes/amor/amor0/amor14/amor14.component';
import { Amor15Component } from './components/heroes/amor/amor0/amor15/amor15.component';



//SUPERACION
import { SuperacionComponent } from './components/heroes/superacion/superacion.component';
import { Superacion01Component } from './components/heroes/superacion/superacion0/superacion01/superacion01.component';
import { Superacion02Component } from './components/heroes/superacion/superacion0/superacion02/superacion02.component';
import { Superacion03Component } from './components/heroes/superacion/superacion0/superacion03/superacion03.component';
import { Superacion04Component } from './components/heroes/superacion/superacion0/superacion04/superacion04.component';
import { Superacion05Component } from './components/heroes/superacion/superacion0/superacion05/superacion05.component';
import { Superacion06Component } from './components/heroes/superacion/superacion0/superacion06/superacion06.component';
import { Superacion07Component } from './components/heroes/superacion/superacion0/superacion07/superacion07.component';
import { Superacion08Component } from './components/heroes/superacion/superacion0/superacion08/superacion08.component';
import { Superacion09Component } from './components/heroes/superacion/superacion0/superacion09/superacion09.component';
import { Superacion10Component } from './components/heroes/superacion/superacion0/superacion10/superacion10.component';


//DINERO
import { DineroComponent } from './components/heroes/dinero/dinero.component';
import { Dinero01Component } from './components/heroes/dinero/dinero0/dinero01/dinero01.component';
import { Dinero02Component } from './components/heroes/dinero/dinero0/dinero02/dinero02.component';
import { Dinero03Component } from './components/heroes/dinero/dinero0/dinero03/dinero03.component';
import { Dinero04Component } from './components/heroes/dinero/dinero0/dinero04/dinero04.component';
import { Dinero05Component } from './components/heroes/dinero/dinero0/dinero05/dinero05.component';
import { Dinero06Component } from './components/heroes/dinero/dinero0/dinero06/dinero06.component';
import { Dinero07Component } from './components/heroes/dinero/dinero0/dinero07/dinero07.component';
import { Dinero08Component } from './components/heroes/dinero/dinero0/dinero08/dinero08.component';
import { Dinero09Component } from './components/heroes/dinero/dinero0/dinero09/dinero09.component';
import { Dinero10Component } from './components/heroes/dinero/dinero0/dinero10/dinero10.component';
import { Dinero11Component } from './components/heroes/dinero/dinero0/dinero11/dinero11.component';



//BIOKINESIS
import { BiokinesisComponent } from './components/heroes/biokinesis/biokinesis.component';
import { Biokinesis01Component } from './components/heroes/biokinesis/biokinesis0/biokinesis01/biokinesis01.component';
import { Biokinesis02Component } from './components/heroes/biokinesis/biokinesis0/biokinesis02/biokinesis02.component';
import { Biokinesis03Component } from './components/heroes/biokinesis/biokinesis0/biokinesis03/biokinesis03.component';


//ENSEÑANZAS
import { EnsenanzasComponent } from './components/heroes/ensenanzas/ensenanzas.component';
import { Ensenanzas01Component } from './components/heroes/ensenanzas/ensenanzas0/ensenanzas01/ensenanzas01.component';
import { Ensenanzas02Component } from './components/heroes/ensenanzas/ensenanzas0/ensenanzas02/ensenanzas02.component';
import { Ensenanzas03Component } from './components/heroes/ensenanzas/ensenanzas0/ensenanzas03/ensenanzas03.component';
import { Ensenanzas04Component } from './components/heroes/ensenanzas/ensenanzas0/ensenanzas04/ensenanzas04.component';
import { Ensenanzas05Component } from './components/heroes/ensenanzas/ensenanzas0/ensenanzas05/ensenanzas05.component';
import { Ensenanzas06Component } from './components/heroes/ensenanzas/ensenanzas0/ensenanzas06/ensenanzas06.component';
import { Ensenanzas07Component } from './components/heroes/ensenanzas/ensenanzas0/ensenanzas07/ensenanzas07.component';
import { Ensenanzas08Component } from './components/heroes/ensenanzas/ensenanzas0/ensenanzas08/ensenanzas08.component';
import { Ensenanzas09Component } from './components/heroes/ensenanzas/ensenanzas0/ensenanzas09/ensenanzas09.component';
import { Ensenanzas10Component } from './components/heroes/ensenanzas/ensenanzas0/ensenanzas10/ensenanzas10.component';


//AUTENTIFICACION
import { PreciosComponent } from './components/shared/precios/precios.component';



import { KinesisComponent } from './components/heroes/kinesis/kinesis.component';
import { DimensionesComponent } from './components/heroes/dimensiones/dimensiones.component';
import { MeditacionComponent } from './components/heroes/meditacion/meditacion.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { CookiesComponent } from './components/cookies/cookies.component';

//AUDIOS SUBLIMINALES



import { AudiosensenanzasComponent } from './components/heroes/ensenanzas/audiosensenanzas/audiosensenanzas.component';
import { Audiosensenanzas1Component } from './components/heroes/ensenanzas/audiosensenanzas1/audiosensenanzas1.component';
import { Audiosensenanzas2Component } from './components/heroes/ensenanzas/audiosensenanzas2/audiosensenanzas2.component';
import { Audiosensenanzas3Component } from './components/heroes/ensenanzas/audiosensenanzas3/audiosensenanzas3.component';



//AUDIOS SUBLIMINALES AMOR

import { AudiosamorComponent } from './components/heroes/amor/audiosamor/audiosamor.component';
import { Audiosamor1Component } from './components/heroes/amor/audiosamor1/audiosamor1.component';
import { Audiosamor2Component } from './components/heroes/amor/audiosamor2/audiosamor2.component';
import { Audiosamor3Component } from './components/heroes/amor/audiosamor3/audiosamor3.component';

//AUDIOS SUBLIMINALES  SALUD PERFECTA

import { AudiosaludComponent } from './components/heroes/salud/audiosalud/audiosalud.component';
import { Audiosalud1Component } from './components/heroes/salud/audiosalud1/audiosalud1.component';
import { Audiosalud2Component } from './components/heroes/salud/audiosalud2/audiosalud2.component';
import { Audiosalud3Component } from './components/heroes/salud/audiosalud3/audiosalud3.component';


//AUDIOS SUBLIMINALES  SUPERACION
import { AudiossuperacionComponent } from './components/heroes/superacion/audiossuperacion/audiossuperacion.component';
import { Audiossuperacion1Component } from './components/heroes/superacion/audiossuperacion1/audiossuperacion1.component';
import { Audiossuperacion2Component } from './components/heroes/superacion/audiossuperacion2/audiossuperacion2.component';
import { Audiossuperacion3Component } from './components/heroes/superacion/audiossuperacion3/audiossuperacion3.component';



//AUDIOS SUBLIMINALES DINERO

import { AudiosdineroComponent } from './components/heroes/dinero/audiosdinero/audiosdinero.component';
import { Audiosdinero1Component } from './components/heroes/dinero/audiosdinero1/audiosdinero1.component';
import { Audiosdinero2Component } from './components/heroes/dinero/audiosdinero2/audiosdinero2.component';
import { Audiosdinero3Component } from './components/heroes/dinero/audiosdinero3/audiosdinero3.component';



import { AudiosbiokinesisComponent } from './components/heroes/biokinesis/audiosbiokinesis/audiosbiokinesis.component';
import { Audiosbiokinesis1Component } from './components/heroes/biokinesis/audiosbiokinesis1/audiosbiokinesis1.component';
import { Audiosbiokinesis2Component } from './components/heroes/biokinesis/audiosbiokinesis2/audiosbiokinesis2.component';
import { Audiosbiokinesis3Component } from './components/heroes/biokinesis/audiosbiokinesis3/audiosbiokinesis3.component';




const APP_ROUTES: Routes = [

  { path: 'subliminal', component: SubliminalComponent },
  { path: 'frecuencias', component: FrecuenciasComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'categorias', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  
  //AUTENTIFICACION
  { path: 'precios', component: PreciosComponent },

  //SALUD
  { path: 'salud', component: SaludComponent},
  { path: 'salud01', component: Salud01Component },
  { path: 'salud02', component: Salud02Component },
  { path: 'salud03', component: Salud03Component },
  { path: 'salud04', component: Salud04Component },
  { path: 'salud05', component: Salud05Component },
  { path: 'salud06', component: Salud06Component },
  { path: 'salud07', component: Salud07Component },
  { path: 'salud08', component: Salud08Component },
  { path: 'salud09', component: Salud09Component },
  { path: 'salud10', component: Salud10Component },
  
 //AUDIOS SUBLIMINALES SALUD
   { path: 'audiossalud', component: AudiosaludComponent },
   { path: 'audiossalud1', component: Audiosalud1Component },
   { path: 'audiossalud2', component: Audiosalud2Component },
   { path: 'audiossalud3', component: Audiosalud3Component },


  //AMOR
  { path: 'amor', component: AmorComponent },
  { path: 'amor01', component: Amor01Component },
  { path: 'amor02', component: Amor02Component },
  { path: 'amor03', component: Amor03Component },
  { path: 'amor04', component: Amor04Component },
  { path: 'amor05', component: Amor05Component },
  { path: 'amor06', component: Amor06Component },
  { path: 'amor07', component: Amor07Component },
  { path: 'amor08', component: Amor08Component },
  { path: 'amor09', component: Amor09Component },
  { path: 'amor10', component: Amor10Component },
  { path: 'amor11', component: Amor11Component },
  { path: 'amor12', component: Amor12Component },
  { path: 'amor13', component: Amor13Component },
  { path: 'amor14', component: Amor14Component },
  { path: 'amor15', component: Amor15Component },
 
  //AUDIOS SUBLIMINALES  AMOR
   { path: 'audiosamor', component: AudiosamorComponent },
   { path: 'audiosamor1', component: Audiosamor1Component },
   { path: 'audiosamor2', component: Audiosamor2Component },
   { path: 'audiosamor3', component: Audiosamor3Component },
 

 //SUPERACION
 { path: 'superacion', component:  SuperacionComponent   } ,
 { path: 'superacion01', component: Superacion01Component } ,
 { path: 'superacion02', component: Superacion02Component } ,
 { path: 'superacion03', component: Superacion03Component } ,
 { path: 'superacion04', component: Superacion04Component } ,
 { path: 'superacion05', component: Superacion05Component } ,
 { path: 'superacion06', component: Superacion06Component } ,
 { path: 'superacion07', component: Superacion07Component }, 
 { path: 'superacion08', component: Superacion08Component }, 
 { path: 'superacion09', component: Superacion09Component }, 
 { path: 'superacion10', component: Superacion10Component } ,

 //AUDIOS SUBLIMINALES SUPERACION
   { path: 'audiossuperacion', component:  AudiossuperacionComponent },
   { path: 'audiossuperacion1', component: Audiossuperacion1Component },
   { path: 'audiossuperacion2', component: Audiossuperacion2Component },
   { path: 'audiossuperacion3', component: Audiossuperacion3Component },

  //DINERO
  { path: 'dinero', component: DineroComponent },
  { path: 'dinero01', component: Dinero01Component } ,
  { path: 'dinero02', component: Dinero02Component } ,
  { path: 'dinero03', component: Dinero03Component } ,
  { path: 'dinero04', component: Dinero04Component } ,
  { path: 'dinero05', component: Dinero05Component } ,
  { path: 'dinero06', component: Dinero06Component } ,
  { path: 'dinero07', component: Dinero07Component } ,
  { path: 'dinero08', component: Dinero08Component } ,
  { path: 'dinero09', component: Dinero09Component } ,
  { path: 'dinero10', component: Dinero10Component } ,
  { path: 'dinero11', component: Dinero11Component } ,

 //AUDIOS SUBLIMINALES SALUD
   { path: 'audiosdinero', component: AudiosdineroComponent },
   { path: 'audiosdinero1', component: Audiosdinero1Component },
   { path: 'audiosdinero2', component: Audiosdinero2Component },
   { path: 'audiosdinero3', component: Audiosdinero3Component },
//BIOKINESIS
  { path: 'biokinesis', component: BiokinesisComponent },
  { path: 'biokinesis01', component: Biokinesis01Component },
  { path: 'biokinesis02', component: Biokinesis02Component },
  { path: 'biokinesis03', component: Biokinesis03Component },
  
 //AUDIOS SUBLIMINALES SALUD
   { path: 'audiosbiokinesis', component: AudiosbiokinesisComponent },
   { path: 'audiosbiokinesis1', component: Audiosbiokinesis1Component },
   { path: 'audiosbiokinesis2', component: Audiosbiokinesis2Component },
   { path: 'audiosbiokinesis3', component: Audiosbiokinesis3Component },


  //ENSEÑANZAS 
  { path: 'ensenanzas', component: EnsenanzasComponent },
  { path: 'ensenanzas01', component: Ensenanzas01Component },
  { path: 'ensenanzas02', component: Ensenanzas02Component },
  { path: 'ensenanzas03', component: Ensenanzas03Component },
  { path: 'ensenanzas04', component: Ensenanzas04Component },
  { path: 'ensenanzas05', component: Ensenanzas05Component },
  { path: 'ensenanzas06', component: Ensenanzas06Component },
  { path: 'ensenanzas07', component: Ensenanzas07Component },
  { path: 'ensenanzas08', component: Ensenanzas08Component },
  { path: 'ensenanzas09', component: Ensenanzas09Component },
  { path: 'ensenanzas10', component: Ensenanzas10Component },

  //AUDIOS SUBLIMINALES ENSEÑANZAS
   { path: 'audiosensenanzas',  component:  AudiosensenanzasComponent },
   { path: 'audiosensenanzas1', component: Audiosensenanzas1Component },
   { path: 'audiosensenanzas2', component: Audiosensenanzas2Component },
   { path: 'audiosensenanzas3', component: Audiosensenanzas3Component },



  { path: 'kinesis', component: KinesisComponent },
  { path: 'dimensiones', component: DimensionesComponent },
  { path: 'meditacion', component: MeditacionComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'cookies', component: CookiesComponent },
   { path: 'privacidad', component: PrivacidadComponent },
   
 { path: '**', pathMatch: 'full', redirectTo: 'categorias' },


];

export const APP_ROUTING  = RouterModule.forRoot( APP_ROUTES, { useHash:true });