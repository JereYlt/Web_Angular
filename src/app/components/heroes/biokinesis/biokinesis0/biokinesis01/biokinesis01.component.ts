import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-biokinesis01',
  templateUrl: './biokinesis01.component.html',
  styleUrls: ['./biokinesis01.component.css']
})
export class Biokinesis01Component implements OnInit {

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

  verBiokinesis02(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['biokinesis02']);

  }

   verBiokinesis03(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['biokinesis03']);

  }

 }
