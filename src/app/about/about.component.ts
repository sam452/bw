import { Component, OnInit, OnDestroy  } from '@angular/core';
// import { BackendService } from '../service/backend.service';
import { Article } from '../articles/article';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ArticleService]
})
export class AboutComponent implements OnInit {

  errorMessage: string;
  articles: Article[];
  article: Article;
  mode = 'Observable';
  public id: string = null;
  private sub: any;
  private host: 'https://works.bentwhiskerranch.org/';
  private param = '?filter[condition][path]=field_tags.name&filter[condition][value]=about&include=field_image';

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  getArticles(param): void {
    this.articleService.getArticles(param).subscribe(articles => this.articles = articles);
  }

  getArticle(): void {
    this.articleService.getArticleXimg(this.id).subscribe(article => this.article = article);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.getArticles(this.param);
    });
  }

}
