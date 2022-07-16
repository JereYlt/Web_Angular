import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']

})

export class SaludComponent implements OnInit {

  

  constructor( private router : Router) { 



}
              
  ngOnInit() {

  }

verAudiossalud(){


  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiossalud']);

  }

  verAudiossalud1(){


  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiossalud1']);

  }
verAudiossalud2(){


  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiossalud2']);

  }

verAudiossalud3(){


  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiossalud3']);

  }
  verSubliminales(){

  window.scroll({
  top: 0, 
 
});
this.router.navigate(['subliminal']);
}


verPreguntas(){

  window.scroll({
  top: 0, 
 
});
this.router.navigate(['preguntas']);
}


verHeroes(){

  window.scroll({
  top: 0, 
 
});
this.router.navigate(['heroes']);
}

  verSalud01(){

window.scroll({
  top: 0, 
  
});

    this.router.navigate(['salud01']);

  }

    verSalud02(){

window.scroll({
  top: 0, 
  
});

    this.router.navigate(['salud02']);

  }

  verSalud03(){

window.scroll({
  top: 0, 
  
});

    this.router.navigate(['salud03']);

  }
}
