import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { Superacion1Service } from '../../../../servicios/superacion1.service';
declare var $:any;

@Component({
  selector: 'app-audiossuperacion1',
  templateUrl: './audiossuperacion1.component.html',
  styleUrls: ['./audiossuperacion1.component.css']
})
export class Audiossuperacion1Component implements OnInit {

  
 videos:any[] = [];
  videoSel:any;
constructor( private router:Router,public _yts:Superacion1Service ){

  this._yts.getVideos()
   .subscribe( videos =>this.videos = videos);

}

  ngOnInit() {

  }

 verVideo( video:any ){
    this.videoSel = video;
    $('#myModal').modal();
  }

  cerraModal(){
      this.videoSel =null;
    $('#myModal').modal('hide');
  }


  verSuperacion(){


    this.router.navigate(['superacion']);

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

}