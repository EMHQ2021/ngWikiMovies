import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(
      `${environment.API_AUTH}login`,
      {
        username: email,
        password,
      },
      httpOptions
    );
  }
}
