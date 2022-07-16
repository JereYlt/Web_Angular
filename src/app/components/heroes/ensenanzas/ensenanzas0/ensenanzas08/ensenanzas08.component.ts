import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-ensenanzas08',
  templateUrl: './ensenanzas08.component.html',
  styleUrls: ['./ensenanzas08.component.css']
})
export class Ensenanzas08Component implements OnInit {

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

 verEnsenanzas01(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['ensenanzas01']);

  }

  verEnsenanzas02(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['ensenanzas02']);

  }

   verEnsenanzas03(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['ensenanzas03']);

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



     verEnsenanzas09(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['ensenanzas09']);

  }

     verEnsenanzas10(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['ensenanzas10']);

  }


 }
