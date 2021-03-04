import { Component, OnInit, OnDestroy } from '@angular/core';

import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../articles/article';

@Component({
  selector: 'app-successes',
  templateUrl: './successes.component.html',
  styleUrls: ['./successes.component.scss'],
  providers: [ArticleService]
})
export class SuccessesComponent implements OnInit {
  errorMessage: string;
  articles: Article[];
  mode = 'Observable';
  private sub: any;
  private host: 'https://works.bentwhiskerranch.org/';
  private param = '?filter[condition][path]=field_tags.name&filter[condition][value]=adopted&include=field_image';
  // private API_URL = 'https://works.bentwhiskerranch.org/jsonapi/node/article?fields[node--article]=title&fields[taxonomy_term--status]=adopted&include=field_tags';
 
  constructor(private articleService: ArticleService, 
    private route: ActivatedRoute,
    private router: Router) { }

  getArticles(param): void {
    this.articleService.getArticles(param).subscribe(articles => this.articles = articles);
  }

  ngOnInit() {
  	this.getArticles(this.param);
  }

}
