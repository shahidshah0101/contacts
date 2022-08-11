import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactsServices {
  constructor(private http: HttpClient) {}
  getContacts() {
    let header = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    return this.http.get('https://reqres.in/api/users?page=1', {
      headers: header,
    });
  }
}
