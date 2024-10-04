import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { type data } from './form.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:3001/user-places';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
  addUserData(userData: data): Observable<any> {
    return this.http.post(this.url, userData); // Change to POST if needed
  }
}
