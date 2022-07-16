import { Component, OnInit } from '@angular/core';
import  { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


// Declaro las variables de jQuery
declare var jQuery:any;
declare var $:any;
 
declare var module: NodeModule;
interface NodeModule {
  id: string;
}


@Component({
  selector: 'app-categorias',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


	categorias:any[] = [];

  constructor( private _heroesService: HeroesService ,
               private router:Router
               ) { 

  //	console.log("constructor");

  }

  ngOnInit() {

  	this.categorias = this._heroesService.getHeroes();

  	//console.log(this.heroes);
  

  }

  verHeroe(idx:number ){
    
     window.scroll({
  top: 0, 
 
});

    this.router.navigate( ['/heroe', idx] );



  }

  verSalud(){

  window.scroll({
  top: 0, 
 
});

    this.router.navigate(['salud']);

  }

   verDinero(){
  window.scroll({
  top: 0, 
 
});


    this.router.navigate(['dinero']);

  }
  
   verAmor(){

  window.scroll({
  top: 0, 
 
});


    this.router.navigate(['amor']);

  }
  
   verBiokinesis(){

  window.scroll({
  top: 0, 
 
});


    this.router.navigate(['biokinesis']);

  }
  
  
  
  verSuperacion(){

  window.scroll({
  top: 0, 
 
});

    this.router.navigate(['superacion']);

  }



  verEnsenanzas(){

  window.scroll({
  top: 0, 
 
});
    this.router.navigate(['ensenanzas/']);

  }




}
