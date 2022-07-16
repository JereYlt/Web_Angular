import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { Ensenanzas2Service } from '../../../../servicios/ensenanzas2.service';
declare var $:any;

@Component({
  selector: 'app-audiosensenanzas2',
  templateUrl: './audiosensenanzas2.component.html',
  styleUrls: ['./audiosensenanzas2.component.css']
})
export class Audiosensenanzas2Component implements OnInit {


	 
 videos:any[] = [];
  videoSel:any;
constructor( private router:Router,public _yts:Ensenanzas2Service ){

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


  verEnsenanzas(){


    this.router.navigate(['ensenanzas']);

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