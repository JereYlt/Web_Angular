import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-superacion10',
  templateUrl: './superacion10.component.html',
  styleUrls: ['./superacion10.component.css']
})
export class Superacion10Component implements OnInit {

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


  
  verSuperacion08(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['superacion08']);

  }
    verSuperacion09(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['superacion09']);

  }


}
