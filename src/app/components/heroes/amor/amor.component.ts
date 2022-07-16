import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-amor',
  templateUrl: './amor.component.html',
  styleUrls: ['./amor.component.css']
})
export class AmorComponent implements OnInit {


  constructor( private router : Router ) { }
              


  ngOnInit() {

  	

  }
 verSubliminales(){

  window.scroll({
  top: 0, 
 
});
this.router.navigate(['subliminal']);
}


verPreguntas(){

  window.scroll({
  top: 0, 
 
});
this.router.navigate(['preguntas']);
}

verHeroes(){

  window.scroll({
  top: 0, 
 
});
this.router.navigate(['heroes']);
}

  
  verAudiosamor(){


  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiosamor']);

  }

  verAudiosamor1(){


  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiosamor1']);

  }
verAudiosamor2(){


  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiosamor2']);

  }

verAudiosamor3(){


  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['audiosamor3']);

  }
  

  verAmor01(){
window.scroll({
  top: 0, 
  
});

    this.router.navigate(['amor01']);

  }

  verAmor02(){

window.scroll({
  top: 0, 
  
});
    this.router.navigate(['amor02']);

  }

   verAmor03(){
window.scroll({
  top: 0, 
  
});

    this.router.navigate(['amor03']);

  }

 }
