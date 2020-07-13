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
  private articlesUrl = 'https://works.bentwhiskerranch.org/jsonapi/node/article';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]>
    {


      return this.http.get<Article[]>(this.articlesUrl, httpOptions)
      .pipe(
        map(res => res['data'])
      )
      .pipe(
        catchError(this.handleError([]))
      );
    

  }

  getArticle(id: string): Observable<Article>
  {
    if (id) {
      return this.http.get<Article>(this.articlesUrl + '/' + id + '?include=field_image', httpOptions)
        .pipe(
          map(res => res['data', 'included'])
         )
        .pipe(
          catchError(this.handleError([]))
    );
    } 
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  private getImages(relations: object): Observable<Article[]>
    {
      return null;
    }

}
