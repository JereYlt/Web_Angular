import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-amor02',
  templateUrl: './amor02.component.html',
  styleUrls: ['./amor02.component.css']
})
export class Amor02Component implements OnInit {

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

 verAmor08(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['amor08']);

  }


 verAmor09(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['amor09']);

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


 

}
