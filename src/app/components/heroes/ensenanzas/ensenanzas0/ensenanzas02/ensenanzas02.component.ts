import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-ensenanzas02',
  templateUrl: './ensenanzas02.component.html',
  styleUrls: ['./ensenanzas02.component.css']
})
export class Ensenanzas02Component implements OnInit {

   constructor( private router : Router ) { }
              


  ngOnInit() {

  	

  }

verSubliminales(){

  window.scroll({
  top: 0, 
 
});

}


verPreguntas(){

  window.scroll({
  top: 0, 
 
});

}

verHeroes(){

  window.scroll({
  top: 0, 
 
});

}


  verEnsenanzas01(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['ensenanzas01']);

  }

   verEnsenanzas03(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['ensenanzas03']);

  }
     verEnsenanzas04(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['ensenanzas04']);

  }

     verEnsenanzas05(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['ensenanzas05']);

  }

     verEnsenanzas06(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['ensenanzas06']);

  }


     verEnsenanzas07(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['ensenanzas07']);

  }


     verEnsenanzas08(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['ensenanzas08']);

  }


     verEnsenanzas09(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['ensenanzas09']);

  }

     verEnsenanzas10(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['ensenanzas10']);

  }


 }
