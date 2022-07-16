import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { Biokinesis3Service } from '../../../../servicios/biokinesis3.service';

declare var $:any;

@Component({
  selector: 'app-audiosbiokinesis3',
  templateUrl: './audiosbiokinesis3.component.html',
  styleUrls: ['./audiosbiokinesis3.component.css']
})
export class Audiosbiokinesis3Component implements OnInit {

 
   videos:any[] = [];
  videoSel:any;
  
constructor( private router:Router,public _yts:Biokinesis3Service ){

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
