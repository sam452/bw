import { Component, OnInit, OnDestroy } from '@angular/core';

import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../articles/article';
import { ApiPipePipe } from '../api-pipe.pipe';


@Component({
  selector: 'app-successes',
  templateUrl: './successes.component.html',
  styleUrls: ['./successes.component.scss'],
  providers: [ArticleService]
})
export class SuccessesComponent implements OnInit {
  errorMessage: string;
  articles: Article[];
  article: Article;
  mode = 'Observable';
  selectedArticle = Article;
  private sub: any;
  private host: 'https://works.bentwhiskerranch.org/';
  private param = '?filter[condition][path]=field_tags.name&filter[condition][value]=adopted&include=field_image';
  public id: string = null;
  // private API_URL = 'https://works.bentwhiskerranch.org/jsonapi/node/article?fields[node--article]=title&fields[taxonomy_term--status]=adopted&include=field_tags';
 
  constructor(private articleService: ArticleService, 
    private route: ActivatedRoute,
    private router: Router) { }

  getArticles(param): void {
    this.articleService.getArticles(param).subscribe(articles => this.articles = articles);
  }

  getArticle(id): void {
    this.articleService.getArticle(id).subscribe(article => this.article = article);
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.getArticle(this.id);
        }
        else {
          this.getArticles(this.param);
        }
      });
  	
  }

  // onSelect(article: Article): void {
  //   this.selectedArticle = article;
  // }

}
