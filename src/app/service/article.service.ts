import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Article } from '../articles/article';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesUrl = 'https://works.bentwhiskerranch.org';

  constructor(private http: HttpClient) {}

  getArticles(id: string): Observable<Article[]>
  {
    console.log(id);
    if (id) {
      return this.http.get<Article[]>(this.articlesUrl + '/jsonapi/node/article/' + id);
    }
    else {
      return this.http.get<Article[]>(this.articlesUrl + '/jsonapi/node/article?sort=-created');
    }
  }

}
