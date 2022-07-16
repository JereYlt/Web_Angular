import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-superacion03',
  templateUrl: './superacion03.component.html',
  styleUrls: ['./superacion03.component.css']
})
export class Superacion03Component implements OnInit {

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

   verSuperacion01(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['superacion01']);

  }
  
    verSuperacion02(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['superacion02']);

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
