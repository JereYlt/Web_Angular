import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-superacion02',
  templateUrl: './superacion02.component.html',
  styleUrls: ['./superacion02.component.css']
})
export class Superacion02Component implements OnInit {

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

  
   verSuperacion03(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['superacion03']);

  }

    verSuperacion04(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['superacion04']);

  }


    verSuperacion05(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['superacion05']);

  }

    verSuperacion06(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['superacion06']);

  }

    verSuperacion07(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['superacion07']);

  }


}
