import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'


@Component({
  selector: 'app-amor11',
  templateUrl: './amor11.component.html',
  styleUrls: ['./amor11.component.css']
})
export class Amor11Component implements OnInit {

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


 

    verAmor05(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['amor05']);

  }
 verAmor06(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['amor06']);

  }


  verAmor07(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['amor07']);

  }

 


 verAmor12(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['amor12']);

  }



   verAmor13(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['amor13']);

  }

   verAmor14(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['amor14']);

  }

   verAmor15(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['amor15']);

  }



}
