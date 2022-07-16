import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { Biokinesis1Service } from '../../../../servicios/biokinesis1.service';

declare var $:any;

@Component({
  selector: 'app-audiosbiokinesis1',
  templateUrl: './audiosbiokinesis1.component.html',
  styleUrls: ['./audiosbiokinesis1.component.css']
})
export class Audiosbiokinesis1Component implements OnInit {

 
   videos:any[] = [];
  videoSel:any;
  
constructor( private router:Router,public _yts:Biokinesis1Service ){

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


  verBiokinesis(){


    this.router.navigate(['biokinesis']);

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
