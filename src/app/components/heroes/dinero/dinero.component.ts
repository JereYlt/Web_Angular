import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-dinero',
  templateUrl: './dinero.component.html',
  styleUrls: ['./dinero.component.css']
})
export class DineroComponent implements OnInit {

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


   verAudiosdinero(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['audiosdinero']);

  }

    verAudiosdinero1(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['audiosdinero1']);

  }

    verAudiosdinero2(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['audiosdinero2']);

  }
    verAudiosdinero3(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['audiosdinero3']);

  }


  
   verDinero03(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['dinero03']);

  }


   verDinero04(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['dinero04']);

  }


   verDinero05(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['dinero05']);

  }


   

   verDinero11(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['dinero11']);

  }


 }
