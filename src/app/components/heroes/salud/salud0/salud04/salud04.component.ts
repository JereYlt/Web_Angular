import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-salud04',
  templateUrl: './salud04.component.html',
  styleUrls: ['./salud04.component.css']
})
export class Salud04Component implements OnInit {



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


    verSalud05(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['salud05']);

  }


  verSalud06(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['salud06']);

  }



  verSalud07(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['salud07']);

  }



  verSalud08(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['salud08']);

  }


  verSalud09(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['salud09']);

  }


  verSalud10(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['salud10']);

  }



}
