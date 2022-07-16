import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { Ensenanzas1Service } from '../../../../servicios/ensenanzas1.service';
declare var $:any;


@Component({
  selector: 'app-audiosensenanzas1',
  templateUrl: './audiosensenanzas1.component.html',
  styleUrls: ['./audiosensenanzas1.component.css']
})
export class Audiosensenanzas1Component implements OnInit {

 	
	 
 videos:any[] = [];
  videoSel:any;
constructor( private router:Router,public _yts:Ensenanzas1Service ){

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