import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Declaro las variables de jQuery
declare var jQuery:any;
declare var $:any;
 
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {



}
