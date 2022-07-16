import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-salud06',
  templateUrl: './salud06.component.html',
  styleUrls: ['./salud06.component.css']
})
export class Salud06Component implements OnInit {



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
