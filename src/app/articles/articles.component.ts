import { Component, OnInit, OnDestroy } from '@angular/core';

import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RelationshipService } from '../service/relationship.service';
import { Relationship } from '../service/relationship';

export class Article {
  attributes: object;

}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  relationship: Relationship;
  public id: string = null;
  private sub: any;
  private API_URL = 'https://works.bentwhiskerranch.org/jsonapi/node/article/';

  constructor(private articleService: ArticleService, 
    private route: ActivatedRoute,
    private router: Router) { }

  getArticles(id: string): void {
  console.log(id);
    if (id) {
      this.articleService.getArticles(id).subscribe(articles => this.articles = articles);

    } else {


    this.articleService.getArticles(null).subscribe(articles => this.articles = articles);
    }
  }


  ngOnInit() : void {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
      }
      this.getArticles(this.id);
    });
      this.getArticles(null);
  }



 






}
