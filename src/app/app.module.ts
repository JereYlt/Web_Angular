import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import {  LOCALE_ID,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { CommonModule } from '@angular/common';


import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';

import localeFrExtra from '@angular/common/locales/extra/fr';
import localePtExtra from '@angular/common/locales/extra/pt';
import localeEnExtra from '@angular/common/locales/extra/en';

// the second parameter 'fr' is optional
registerLocaleData(localePt, 'En');
registerLocaleData(localePt, 'fr');
registerLocaleData(localePt, 'pt');

registerLocaleData(localeFr, 'en-EN', localeEnExtra);
registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
registerLocaleData(localeFr, 'pt-PT', localePtExtra);


//TRADUCCIONES
import { AdsenseModule } from 'ng2-adsense';


//RUTAS 
import { APP_ROUTING } from './app.routes';




// SERVICIOS  salud perfecta

import { YoutubeService } from './servicios/youtube.service';
import { SaludService } from './servicios/salud.service';
import { Salud1Service } from './servicios/salud1.service';
import { Salud2Service } from './servicios/salud2.service';
import { Salud3Service } from './servicios/salud3.service';

import { HeroesService } from './servicios/heroes.service';
import { ContactoService } from './servicios/contacto.service';
import { PreguntasService } from './servicios/preguntas.service';



import { AmorService } from './servicios/amor.service';
import { SuperacionService } from './servicios/superacion.service';
import { DineroService } from './servicios/dinero.service';
import { BiokinesisService } from './servicios/biokinesis.service';
import { EnsenanzasService } from './servicios/ensenanzas.service';


//INTERFACE
import { Contacto } from './interfaces/contacto.interface';

//COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SubliminalComponent } from './components/subliminal/subliminal.component';
import { FrecuenciasComponent } from './components/frecuencias/frecuencias.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';


//SALUD
import { SaludComponent } from './components/heroes/salud/salud.component';
import { Salud01Component } from './components/heroes/salud/salud0/salud01/salud01.component';
import { Salud02Component } from './components/heroes/salud/salud0/salud02/salud02.component';
import { Salud03Component } from './components/heroes/salud/salud0/salud03/salud03.component';
import { Salud04Component } from './components/heroes/salud/salud0/salud04/salud04.component';
import { Salud05Component } from './components/heroes/salud/salud0/salud05/salud05.component';
import { Salud06Component } from './components/heroes/salud/salud0/salud06/salud06.component';
import { Salud07Component } from './components/heroes/salud/salud0/salud07/salud07.component';
import { Salud08Component } from './components/heroes/salud/salud0/salud08/salud08.component';
import { Salud09Component } from './components/heroes/salud/salud0/salud09/salud09.component';
import { Salud10Component } from './components/heroes/salud/salud0/salud10/salud10.component';



//DINERO
import { DineroComponent }   from './components/heroes/dinero/dinero.component';
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


//BIOKINESIS
import { BiokinesisComponent } from './components/heroes/biokinesis/biokinesis.component';
import { Biokinesis01Component } from './components/heroes/biokinesis/biokinesis0/biokinesis01/biokinesis01.component';
import { Biokinesis02Component } from './components/heroes/biokinesis/biokinesis0/biokinesis02/biokinesis02.component';
import { Biokinesis03Component } from './components/heroes/biokinesis/biokinesis0/biokinesis03/biokinesis03.component';


import { KinesisComponent } from './components/heroes/kinesis/kinesis.component';
import { DimensionesComponent } from './components/heroes/dimensiones/dimensiones.component';

import { MeditacionComponent } from './components/heroes/meditacion/meditacion.component';



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

import { FooterComponent } from './footer/footer.component';
import { DataComponent } from './components/about/data/data.component';
import { PreciosComponent } from './components/shared/precios/precios.component';

import { TerminosComponent } from './components/terminos/terminos.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';

//AUDIOS SUBLIMINALES


//audios subliminales Enseñanzas
import { AudiosensenanzasComponent } from './components/heroes/ensenanzas/audiosensenanzas/audiosensenanzas.component';
import { Audiosensenanzas1Component } from './components/heroes/ensenanzas/audiosensenanzas1/audiosensenanzas1.component';
import { Audiosensenanzas2Component } from './components/heroes/ensenanzas/audiosensenanzas2/audiosensenanzas2.component';
import { Audiosensenanzas3Component } from './components/heroes/ensenanzas/audiosensenanzas3/audiosensenanzas3.component';

//audios subliminales salud
import { AudiosaludComponent } from './components/heroes/salud/audiosalud/audiosalud.component';
import { Audiosalud1Component } from './components/heroes/salud/audiosalud1/audiosalud1.component';
import { Audiosalud2Component } from './components/heroes/salud/audiosalud2/audiosalud2.component';
import { Audiosalud3Component } from './components/heroes/salud/audiosalud3/audiosalud3.component';

//audios subliminales Amor
import { AudiosamorComponent } from './components/heroes/amor/audiosamor/audiosamor.component';
import { Audiosamor1Component } from './components/heroes/amor/audiosamor1/audiosamor1.component';
import { Audiosamor2Component } from './components/heroes/amor/audiosamor2/audiosamor2.component';
import { Audiosamor3Component } from './components/heroes/amor/audiosamor3/audiosamor3.component';

//audios subliminales Superacion
import { AudiossuperacionComponent } from './components/heroes/superacion/audiossuperacion/audiossuperacion.component';
import { Audiossuperacion1Component } from './components/heroes/superacion/audiossuperacion1/audiossuperacion1.component';
import { Audiossuperacion2Component } from './components/heroes/superacion/audiossuperacion2/audiossuperacion2.component';
import { Audiossuperacion3Component } from './components/heroes/superacion/audiossuperacion3/audiossuperacion3.component';

//audios subliminales Dinero
import { AudiosdineroComponent } from './components/heroes/dinero/audiosdinero/audiosdinero.component';
import { Audiosdinero1Component } from './components/heroes/dinero/audiosdinero1/audiosdinero1.component';
import { Audiosdinero2Component } from './components/heroes/dinero/audiosdinero2/audiosdinero2.component';
import { Audiosdinero3Component } from './components/heroes/dinero/audiosdinero3/audiosdinero3.component';

//audios subliminales Biokinesis
import { AudiosbiokinesisComponent } from './components/heroes/biokinesis/audiosbiokinesis/audiosbiokinesis.component';
import { Audiosbiokinesis1Component } from './components/heroes/biokinesis/audiosbiokinesis1/audiosbiokinesis1.component';
import { Audiosbiokinesis2Component } from './components/heroes/biokinesis/audiosbiokinesis2/audiosbiokinesis2.component';
import { Audiosbiokinesis3Component } from './components/heroes/biokinesis/audiosbiokinesis3/audiosbiokinesis3.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedComponent,
    NavbarComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    SubliminalComponent,
    FrecuenciasComponent,
    PreguntasComponent,
    DomseguroPipe,
    
 
    SaludComponent,
 
    DineroComponent,
 
    AmorComponent,
 
    BiokinesisComponent,
 
    KinesisComponent,
 
    DimensionesComponent,
 
    SuperacionComponent,
 
    MeditacionComponent,
 
    
 
    FooterComponent,
    
 //SALUD
    Salud01Component,
 
    Salud02Component,
 
    Salud03Component,
 
    Salud04Component,
 
    Salud05Component,
 
    Salud06Component,
 
    Salud07Component,
 
    Salud08Component,
 
    Salud09Component,
 
    Salud10Component,
 
  

 //AMOR
    Amor01Component,
 
    Amor02Component,
 
    Amor03Component,
 
    Amor04Component,
 
    Amor05Component,
 
    Amor06Component,
 
    Amor07Component,
 
    Amor08Component,
 
    Amor09Component,
 
    Amor10Component,
 
    Amor11Component,
 
    Amor12Component,
 
    Amor13Component,
 
    Amor14Component,
 
    Amor15Component,
 
 
 
  
    
  //SUPERACION
    Superacion01Component,
 
    Superacion02Component,
 
    Superacion03Component,
 
    Superacion04Component,
 
    Superacion05Component,
 
    Superacion06Component,
 
    Superacion07Component,
 
    Superacion08Component,
 
    Superacion09Component,
 
    Superacion10Component,
    
 //DINERO
    Dinero01Component,
 
    Dinero02Component,
 
    Dinero03Component,
 
    Dinero04Component,
 
    Dinero05Component,
 
    Dinero06Component,
 
    Dinero07Component,
 
    Dinero08Component,
 
    Dinero09Component,
 
    Dinero10Component,
 
    Dinero11Component,
 

 //BIOKINESIS

    Biokinesis01Component,

    Biokinesis02Component,
 
    Biokinesis03Component,
 

 //ENSEÑANZAS

    EnsenanzasComponent,

    Ensenanzas01Component,
 
    Ensenanzas02Component,
 
    Ensenanzas03Component,
 
    Ensenanzas04Component,
 
    Ensenanzas05Component,
 
    Ensenanzas06Component,
 
    Ensenanzas07Component,
 
    Ensenanzas08Component,
 
    Ensenanzas09Component,
 
    Ensenanzas10Component,
 
    DataComponent,
 
    PreciosComponent,
   
    TerminosComponent,
    CookiesComponent,
    PrivacidadComponent,
    //AUDIOS SUBLIMINALES
  
    AudiosensenanzasComponent,
    Audiosensenanzas1Component,
    Audiosensenanzas2Component,
    Audiosensenanzas3Component,

    AudiosaludComponent,
    Audiosalud1Component,
    Audiosalud2Component,
    Audiosalud3Component,

    AudiosamorComponent,
    Audiosamor1Component,
    Audiosamor2Component,
    Audiosamor3Component,

    AudiossuperacionComponent,
    Audiossuperacion1Component,
    Audiossuperacion2Component,
    Audiossuperacion3Component,

    AudiosdineroComponent,
    Audiosdinero1Component,
    Audiosdinero2Component,
    Audiosdinero3Component,

    AudiosbiokinesisComponent,
    Audiosbiokinesis1Component,
    Audiosbiokinesis2Component,
    Audiosbiokinesis3Component,
   


 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,

    
 
  ],
  providers: [

  HeroesService,
  PreguntasService,
  ContactoService,
  YoutubeService,
  SaludService,
  Salud1Service,
  Salud2Service,
  Salud3Service,
   AmorService,
   SuperacionService,
   DineroService,
   BiokinesisService,
   EnsenanzasService,
   { provide: LOCALE_ID, useValue: 'fr' },
   { provide: LOCALE_ID, useValue: 'pt' },
   { provide: LOCALE_ID, useValue: 'en' }     

  
  ],
  bootstrap: [AppComponent],

  exports:[
  RouterModule


  ]

})
export class AppModule { }
