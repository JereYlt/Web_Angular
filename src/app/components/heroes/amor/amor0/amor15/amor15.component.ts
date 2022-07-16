import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-amor15',
  templateUrl: './amor15.component.html',
  styleUrls: ['./amor15.component.css']
})
export class Amor15Component implements OnInit {

 
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


}
