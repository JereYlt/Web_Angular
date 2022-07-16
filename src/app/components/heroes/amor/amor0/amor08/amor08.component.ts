import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-amor08',
  templateUrl: './amor08.component.html',
  styleUrls: ['./amor08.component.css']
})
export class Amor08Component implements OnInit {

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
 
});window.scroll({
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
