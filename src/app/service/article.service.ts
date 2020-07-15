import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Article } from '../articles/article';
import { Image } from '../articles/image';


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

  getTodos() {
    return this.http.get(this.articlesUrl + '/78074bc0-c34f-4e8c-b306-0b18b20b8215?include=field_image', { observe: 'response'});
  }

  getArticle(id: string)
  {
    if (id) {
      return this.http.get<Article>(this.articlesUrl + '/' + id + '?include=field_image', httpOptions)
        
        .pipe(
          catchError(this.handleError([]))
    );
    } 
  }

  // getArticle(id: string): Observable<Article>
  // {
  //   if (id) {
  //     return this.http.get<Article>(this.articlesUrl + '/' + id + '?include=field_image', httpOptions)
  //       .pipe(
  //         map(res => res['body'])
  //        )
  //       .pipe(
  //         catchError(this.handleError([]))
  //   );
  //   } 
  // }


  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getImages(id: string): Observable<Image[]>
    {
      return this.http.get(this.articlesUrl + '/' + id + '?include=field_image', httpOptions)
        .pipe(map((data: { included: Image[]}) => data.included));
    }

}
