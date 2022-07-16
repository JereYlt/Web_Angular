import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { AmorService } from '../../../../servicios/amor.service';

declare var $:any;

@Component({
  selector: 'app-audiosamor',
  templateUrl: './audiosamor.component.html',
  styleUrls: ['./audiosamor.component.css']
})
export class AudiosamorComponent implements OnInit {

  videos:any[] = [];
  videoSel:any;
constructor( private router:Router,public _yts:AmorService ){

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


  verAmor(){


    this.router.navigate(['amor']);

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
