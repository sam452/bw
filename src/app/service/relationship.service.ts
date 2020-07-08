import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Relationship } from './relationship';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class RelationshipService {

  constructor(private http: HttpClient) { }

    getImageUrl(field_image: string): Observable<any> {
      return this.http.get<any>(field_image);
    }

    getImageUrls(field_image: string): Observable<any> {
      return this.http.get<any>(field_image);
    }



  }
