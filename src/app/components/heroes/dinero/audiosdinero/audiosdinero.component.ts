
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { DineroService } from '../../../../servicios/dinero.service';

declare var $:any;

@Component({
  selector: 'app-audiosdinero',
  templateUrl: './audiosdinero.component.html',
  styleUrls: ['./audiosdinero.component.css']
})
export class AudiosdineroComponent implements OnInit {

 
 	videos:any[] = [];
  videoSel:any;
constructor( private router:Router,public _yts:DineroService ){

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
