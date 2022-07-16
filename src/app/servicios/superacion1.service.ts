import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Superacion1Service {

 
  /* VIDEOS SUBIDOS*/
    youtubeUrl = "https://www.googleapis.com/youtube/v3";
    apikey =  "AIzaSyCSZk4Bic4IEdPD4cdZ2rOuRWr2YXoDHsI";
    playlist = "PLEeW2-F1hfyBZbzWUS-fNr3W8YfigtVnK";



    nextPageToken:string ="";



  constructor(public http:HttpClient) { }

  getVideos(){

   let query = `/playlistItems`;

    let params = new HttpParams();

   params= params.set ( 'part', 'snippet' );
   params= params.set ( 'maxResults', '50' );
   params= params.set ( 'playlistId', this.playlist );
   params= params.set ( 'key', this.apikey );

   if( this.nextPageToken ){
       params.set( 'pageToekn', this.nextPageToken);
   }



     return this.getQuery(query, params).pipe(map(data =>{
         this.nextPageToken = data['nextPageToken'];

     let videos:any[] = [];
     for(let video of data['items']){
       let snippet = video['snippet'];
       videos.push(snippet);
     }      
     return videos;
       
       }));
  }

   getQuery(query:string, params: HttpParams){
    const url = `${ this.youtubeUrl}${query}`;
    return this.http.get(url,{params});
  } 
 

   }

  

  
