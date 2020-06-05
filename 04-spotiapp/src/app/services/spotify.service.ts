import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Espotify servicio listo');

  }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
  
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBJ3IO5GP71ut4-LpQqVOcbQKyLSR9qCHJiARYDohBo7hBSNRD96GwkvkwOh95Off_nk1grsWvMlfJZpjI'
    });
    
    return this.http.get(url, { headers });
  }

  getNewReleases() {

    /* const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB-yUhJMt7wH38pA6c9x201lqVgfh477F0X8qyvBlVoOixQqB8LTPIzqrrxR8ej5DoZYjZ70VDdSsofDvw'
    }); */
     return this.getQuery('browse/new-releases?limit=20')
                .pipe( map(data =>{
                  return data['albums'].items;
                }));
  }

  getArtistas( termino: string){
 
    return this.getQuery(`search?q=${termino}%20&type=artist&limit=15`)
                .pipe( map(data => data['artists'].items));
  }

  getArtista( id: string){
    return this.getQuery(`artists/${id}`);
                /* .pipe( map(data => data['artists'].items)); */
  }

  getTopTracks( id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map(data => data['tracks']));
  }


}

