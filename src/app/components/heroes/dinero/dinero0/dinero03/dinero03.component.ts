import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-dinero03',
  templateUrl: './dinero03.component.html',
  styleUrls: ['./dinero03.component.css']
})
export class Dinero03Component implements OnInit {

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


   verDinero06(){
window.scroll({
  top: 0, 
 
});
    this.router.navigate(['dinero06']);

  }


   verDinero07(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['dinero07']);

  }
  
   verDinero08(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['dinero08']);

  }


   verDinero09(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['dinero09']);

  }


   verDinero10(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['dinero10']);

  }


   verDinero11(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['dinero11']);

  }


 }
