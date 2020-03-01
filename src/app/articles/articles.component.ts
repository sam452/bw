import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from './article';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  articles: Article[];
  public id: string = null;
  private sub: any;
  private API_URL = 'https://works.bentwhiskerranch.org/jsonapi/node/article/';

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    if (params['id']) {
      this.id = params['id'];
    }
    this.getArticles(this.id);
    });
  }

  getArticles(id: string): void {
    this.articleService.getArticles(id)
    .subscribe(articles => {
      this.articles = this.getArticlesStructure(articles, id);
    });
  }

  getArticlesStructure(articles, id) {
    var data: Article[] = [];
    if (id) {
      let article = new Article();
      article.id = <string>articles.data.id;
      article.nid = <number>articles.data.attributes.drupal_internal_nid;
      article.title = <string>articles.data.attributes.title;
      article.body = <string>articles.data.attributes.body.processed;
      article.alias = <string>articles.data.attributes.path.alias;
      article.created = <string>articles.data.attributes.created;
      article.changed = <string>articles.data.changed;
      data.push(article);
    } 
    else {
      for (var i = 0; i < articles.data.length; i++) {
        let article = new Article();
        article.id = <string>articles.data[i].id;
        article.nid = <number>articles.data[i].attributes.drupal_internal__nid;
        article.title = <string>articles.data[i].attributes.title;
        article.summary = <string>articles.data[i].attributes.body.summary;
        article.alias = <string>articles.data[i].attributes.path.alias;
        article.created = <string>articles.data[i].attributes.created;
        article.changed = <string>articles.data[i].attributes.changed;
        data.push(article);
      }
    }
    return data;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
