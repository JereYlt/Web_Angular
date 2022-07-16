import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-ensenanzas',
  templateUrl: './ensenanzas.component.html',
  styleUrls: ['./ensenanzas.component.css']
})
export class EnsenanzasComponent implements OnInit {

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
  
verAudiosensenanzas(){
  window.scroll({
  top: 0, 
 
});

    this.router.navigate(['audiosensenanzas']);

  }

  verAudiosensenanzas1(){
  window.scroll({
  top: 0, 
 
});

    this.router.navigate(['audiosensenanzas1']);

  }

  verAudiosensenanzas2(){

  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiosensenanzas2']);

  }

  verAudiosensenanzas3(){

  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiosensenanzas3']);

  }





  verEnsenanzas01(){
window.scroll({
  top: 0, 
  
});

    this.router.navigate(['ensenanzas01']);

  }

    verEnsenanzas02(){
window.scroll({
  top: 0, 
  
});

    this.router.navigate(['ensenanzas02']);

  }

   verEnsenanzas03(){
window.scroll({
  top: 0, 
  
});

    this.router.navigate(['ensenanzas03']);

  }





}
