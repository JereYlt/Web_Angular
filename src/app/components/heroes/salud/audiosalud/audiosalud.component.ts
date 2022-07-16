import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { SaludService,salu,salu1,salu2,salu3 } from '../../../../servicios/salud.service';
import { YoutubeService } from '../../../../servicios/youtube.service';

declare var $:any;

@Component({
  selector: 'app-audiosalud',
  templateUrl: './audiosalud.component.html',
  styleUrls: ['./audiosalud.component.css']
})
export class AudiosaludComponent implements OnInit {

  videos:any[] = [];
  videoSel:any;

 	saluds:salu[]= [];
	salud1:salu1[]= [];
	salud2:salu2[]= [];
	salud3:salu3[]= [];


constructor( private _saludService: SaludService,private router:Router,public _yts:YoutubeService ){


  this._yts.getVideos()
   .subscribe( videos =>this.videos = videos);

}


  ngOnInit() {

  	this.saluds = this._saludService.getSalud();
  	console.log( this.saluds );

  	this.salud1 = this._saludService.getSalud1();
  	console.log( this.salud1 );

  	this.salud2 = this._saludService.getSalud2();
  	console.log( this.salud2 );

  	this.salud3 = this._saludService.getSalud3();
  	console.log( this.salud3 );

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