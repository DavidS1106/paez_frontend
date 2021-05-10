import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  private baseUrl='http://localhost:8080';
  headers = new HttpHeaders({
    'Content-Type' : 'application/json',
  });
  constructor(private http: HttpClient) { }

   authenticate(credentials: { userName: string; password: string; }) : Observable<any>  {
     return this.http.post(this.baseUrl+'/users/authenticate', credentials, {headers: this.headers});
   }
         

}
