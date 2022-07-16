import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-superacion',
  templateUrl: './superacion.component.html',
  styleUrls: ['./superacion.component.css']
})
export class SuperacionComponent implements OnInit {


//tamano:number = 15;

  constructor( private router : Router ) { }
              


  ngOnInit() {

  	

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

  

     verAudiossuperacion(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiossuperacion']);

  }


     verAudiossuperacion1(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiossuperacion1']);

  }

       verAudiossuperacion2(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiossuperacion2']);

  }
     verAudiossuperacion3(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiossuperacion3']);

  }



    verSuperacion02(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['superacion02']);

  }


  verSuperacion03(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['superacion03']);

  }


  verSuperacion06(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['superacion06']);

  }

}
