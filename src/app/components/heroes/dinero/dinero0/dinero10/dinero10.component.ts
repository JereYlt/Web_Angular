import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-dinero10',
  templateUrl: './dinero10.component.html',
  styleUrls: ['./dinero10.component.css']
})
export class Dinero10Component implements OnInit {

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


  


   verDinero11(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['dinero11']);

  }


 }
