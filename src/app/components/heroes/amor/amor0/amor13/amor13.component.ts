import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-amor13',
  templateUrl: './amor13.component.html',
  styleUrls: ['./amor13.component.css']
})
export class Amor13Component implements OnInit {

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

 


 verAmor10(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['amor10']);

  }


 verAmor11(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['amor11']);

  }


 verAmor12(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['amor12']);

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
