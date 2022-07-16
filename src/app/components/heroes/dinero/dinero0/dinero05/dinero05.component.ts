import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-dinero05',
  templateUrl: './dinero05.component.html',
  styleUrls: ['./dinero05.component.css']
})
export class Dinero05Component implements OnInit {

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

  verDinero01(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['dinero01']);

  }

  verDinero02(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['dinero02']);

  }

   verDinero03(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['dinero03']);

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
