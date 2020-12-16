import { Component, OnInit, OnDestroy } from '@angular/core';

import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RelationshipService } from '../service/relationship.service';
import { Relationship } from '../service/relationship';
import { Article } from './article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {
  errorMessage: string;
  articles: Article[];
  mode = 'Observable';
  relationship: Relationship;
  private sub: any;
  private API_URL = 'https://works.bentwhiskerranch.org/jsonapi/node/article/';
  private param = '';

  constructor(private articleService: ArticleService, 
    private route: ActivatedRoute,
    private router: Router) { }

  getArticles(param): void {
    this.articleService.getArticles(param).subscribe(articles => this.articles = articles);
  }


  ngOnInit() : void {
    
      this.getArticles(this.param);
  }

}

