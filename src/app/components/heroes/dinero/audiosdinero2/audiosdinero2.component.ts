
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { Dinero2Service } from '../../../../servicios/dinero2.service';

declare var $:any;

@Component({
  selector: 'app-audiosdinero2',
  templateUrl: './audiosdinero2.component.html',
  styleUrls: ['./audiosdinero2.component.css']
})
export class Audiosdinero2Component implements OnInit {

 videos:any[] = [];
  videoSel:any;
constructor( private router:Router,public _yts:Dinero2Service ){

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


  verDinero(){


    this.router.navigate(['dinero']);

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
