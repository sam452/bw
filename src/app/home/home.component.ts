import { Component, OnInit, OnDestroy  } from '@angular/core';
// import { BackendService } from '../service/backend.service';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../articles/article';
// import { ApiPipePipe } from '../api-pipe.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  articles: Article[];
  article: Article;
  mode = 'Observable';

  private sub: any;
  private host: 'https://works.bentwhiskerranch.org/';
  private param = '?filter[article-promote][path]=promote&filter[article-promote][value]=1&filter[article-promote][operator]==&filter[condition][path]=field_tags.name&filter[condition][value]=Front_page&include=field_image';
  public id: string = "";

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  getArticles(param): void {
    this.articleService.getArticles(param).subscribe(articles => this.articles = articles);
  }

  getArticle(): void {
    const id = this.id;
    this.articleService.getArticle("4fe1ddbe-af94-4888-9cf2-3d032e0fd1c").subscribe(article => this.article = article);
    // this.articleService.getArticle(id).subscribe(article => this.article = article);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // if (params['id']) {
        //this.id = ;
        this.getArticle();
        // }
        // else {
          // this.getArticles(this.param);
        // }
      });
  }
    // this.bs.login({
    //   email: 'sam@bentwhiskerranch.org',
    //   password: 'frist19'
    // }).then(res => console.log(res));

  

}
