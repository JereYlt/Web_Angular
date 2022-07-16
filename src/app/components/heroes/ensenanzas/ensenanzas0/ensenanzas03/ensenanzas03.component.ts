import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-ensenanzas03',
  templateUrl: './ensenanzas03.component.html',
  styleUrls: ['./ensenanzas03.component.css']
})
export class Ensenanzas03Component implements OnInit {

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




 }
