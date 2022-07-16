import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { Salud1Service } from '../../../../servicios/salud1.service';
declare var $:any;

@Component({
  selector: 'app-audiosalud1',
  templateUrl: './audiosalud1.component.html',
  styleUrls: ['./audiosalud1.component.css']
})
export class Audiosalud1Component implements OnInit {
 
  videos:any[] = [];
  videoSel:any;
constructor( private router:Router,public _yts:Salud1Service ){

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


  verSalud(){


    this.router.navigate(['salud']);

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