import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-superacion06',
  templateUrl: './superacion06.component.html',
  styleUrls: ['./superacion06.component.css']
})
export class Superacion06Component implements OnInit {

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
    verSuperacion10(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['superacion10']);

  }


}
