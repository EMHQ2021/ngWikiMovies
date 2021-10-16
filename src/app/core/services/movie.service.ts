import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}
  getAllMovies(): Observable<any> {
    return this.httpClient.get(
      `${environment.API_WIKIMOVIES}${environment.API_MOVIE.PATH_MOVIE}${environment.API_MOVIE.ENDPOINT_GETALLMOVIES}`
    );
  }
}
