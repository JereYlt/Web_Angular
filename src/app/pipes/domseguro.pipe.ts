
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {


	constructor( private domSaniter:DomSanitizer ) {}

  transform(value: string): any {

  	let url = "https://www.youtube.com/embed/";
    let url1 ="?&loop=1&playlist=videoId"
    return this.domSaniter.bypassSecurityTrustResourceUrl ( url + value + url1 )
  }

}

