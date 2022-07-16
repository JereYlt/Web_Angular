import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-biokinesis',
  templateUrl: './biokinesis.component.html',
  styleUrls: ['./biokinesis.component.css']
})
export class BiokinesisComponent implements OnInit {

 constructor( private router : Router ) { }
              


  ngOnInit() {

  	

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
  

verAudiosbiokinesis(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['audiosbiokinesis']);

  }


verAudiosbiokinesis1(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['audiosbiokinesis1']);

  }


verAudiosbiokinesis2(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['audiosbiokinesis2']);

  }



verAudiosbiokinesis3(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['audiosbiokinesis3']);

  }


  verBiokinesis01(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['biokinesis01']);

  }

  verBiokinesis02(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['biokinesis02']);

  }

   verBiokinesis03(){
window.scroll({
  top: 0, 
 
});

    this.router.navigate(['biokinesis03']);

  }

 }
