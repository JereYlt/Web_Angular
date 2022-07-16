import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

declare var jQuery:any;
declare var $:any;
 
declare var module: NodeModule;
interface NodeModule {
  id: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 


  constructor( private router: Router  ) { 

this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });


   }
              
onActivate(e, outlet) {
    outlet.scrollTop = 0;
  }

 
}
 