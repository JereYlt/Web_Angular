import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-subliminal',
  templateUrl: './subliminal.component.html',
  styleUrls: ['./subliminal.component.css']
})
export class SubliminalComponent implements OnInit {

	public isCollapsed = false;

  constructor(  private router : Router) { }

  ngOnInit() {
  }

verPreguntas(){

  window.scroll({
  top: 0, 
 
});

}

verHeroes(){

  window.scroll({
  top: 0, 
 
});

}


  verSalud02(){

window.scroll({
  top: 0, 
  
});
    this.router.navigate(['salud02']);

  }

  verAmor10(){
window.scroll({
  top: 0, 
  
});

    this.router.navigate(['amor10']);

  }

    verEnsenanzas02(){
window.scroll({
  top: 0, 
  
});

    this.router.navigate(['ensenanzas02']);

  }
  verDinero02(){

window.scroll({
  top: 0, 
  
});
    this.router.navigate(['dinero02']);

  }
  
}
