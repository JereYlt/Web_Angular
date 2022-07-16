import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-biokinesis02',
  templateUrl: './biokinesis02.component.html',
  styleUrls: ['./biokinesis02.component.css']
})
export class Biokinesis02Component implements OnInit {
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


  verBiokinesis01(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['biokinesis01']);

  }

   verBiokinesis03(){

window.scroll({
  top: 0, 
 
});
    this.router.navigate(['biokinesis03']);

  }

 }
