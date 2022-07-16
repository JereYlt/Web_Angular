import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Contacto } from "../interfaces/contacto.interface";
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {


	contactoURL:string  = "https://pleya-7a582.firebaseio.com/contacto.json"
	//PUT
//	contactURL: string = "https://pleya-7a582.firebaseio.com/contacto/";


  constructor( private http: Http ) { }

  nuevoContacto (contacto:Contacto){

  	let body = JSON.stringify(  contacto);
  	let headers = new Headers( {
  		'Content-Type': 'application/json'

  	});

   	return this.http.post( this.contactoURL, body, {  headers })
  	.map( res=>{
  		console.log(res.json());
  		return res.json();
  	});
  }
/*

  actualizarContacto (contacto:Contacto, key$:string){

  	let body = JSON.stringify(  contacto);
  	let headers = new Headers( {
  		'Content-Type': 'application/json'

  	});



	let url =  `${this.contactURL}/${key$}.json`;


  	return this.http.put( url, body, { headers: headers })
  	.pipe(map( res=>{
  		console.log(res.json());
  		return res.json();
  	})); 

  }*/

}
