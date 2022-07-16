import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Title} from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Contacto } from '../../interfaces/contacto.interface';
import { ContactoService } from '../../servicios/contacto.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var $:any;
declare var style :any;


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



 mostrarAlert(){
// alert

alert("El mensaje ha sido eviado")

}

	usuario:Contacto = {
		nombre: "",
		apellidos: "",
		correo: "",
		asunto: "",
		mensaje: "",

	}

	constructor ( private _contactoService: ContactoService ,
			  private router: Router,
			
				  ){

	}

  ngOnInit() {

  }

Enviar(){
	

		this._contactoService.nuevoContacto( this.usuario)
		.subscribe( data =>{
		this.router.navigate(['/about', data])

		},
		error => console.error(error));

		
		}


}
