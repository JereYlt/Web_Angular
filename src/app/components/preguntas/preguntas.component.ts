import { Component , OnInit} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { PreguntasService, Pregunta } from '../../servicios/preguntas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit{

preguntas:Pregunta[] =[];

	constructor(private _preguntasService: PreguntasService,
		  private router : Router
		){}


	ngOnInit(){

	//	this.preguntas = this._preguntasServices.getPreguntas();
	this.preguntas = this._preguntasService.getPreguntas();

  	console.log(this.preguntas);

	}

verSubliminales(){

  window.scroll({
  top: 0, 
 
});

}



verHeroes(){

  window.scroll({
  top: 0, 
 
});

}
  
  verAmor02(){
window.scroll({
  top: 0, 
  
});

    this.router.navigate(['amor02']);

  }

  verBiokinesis03(){

window.scroll({
  top: 0, 
  
});
    this.router.navigate(['biokinesis03']);

  }

    verDinero03(){
window.scroll({
  top: 0, 
  
});

    this.router.navigate(['dinero03']);

  }
  verSalud01(){
window.scroll({
  top: 0, 
  
});

    this.router.navigate(['salud01']);

  }

}



