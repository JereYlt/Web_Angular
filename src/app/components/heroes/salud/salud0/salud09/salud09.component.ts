import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-salud09',
  templateUrl: './salud09.component.html',
  styleUrls: ['./salud09.component.css']
})
export class Salud09Component implements OnInit {



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

 verSalud01(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['salud01']);

  }


 verSalud02(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['salud02']);

  }
   verSalud03(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['salud03']);

  }

    verSalud04(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['salud04']);

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



  verSalud10(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['salud10']);

  }


}
