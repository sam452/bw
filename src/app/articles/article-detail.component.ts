import { Component, OnInit } from '@angular/core';
import { Article } from './article';

import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RelationshipService } from '../service/relationship.service';
import { Relationship } from '../service/relationship';

@Component({
  selector: 'article-detail',
  template: `
        <section style="min-height:50em" class="col-md-8 mt-2 sing">
    <div class="article--full">
      <article *ngIf="article">
        
        <div class="article-full--image row pt-5 pb-3">
          <img src="{{ host + article[0].attributes.uri.url }}" style="width:100%; height: 60%" class="rounded img-fluid">
        </div>
 <!-- article.images[0] -->
        <div class="article-full--title row pb-3">
          <h4><a href="/article/{{ article[0].attributes.title }}">{{ article.attributes.title }}</a></h4>
        </div>
        <div class="article-full--created row pb-3">
          <div>
            <span><i class="fa fa-calendar"></i> {{ article.attributes.created }} </span>
            <br>
          </div>
        </div>
        <div class="article-full--body row py-3">
          <div [innerHTML]="article.attributes.body.processed" style="width: 100%;"></div>
        </div>
      </article>
    </div>
    </section>
  `,
  providers: [ArticleService]
})

export class ArticleDetailComponent implements OnInit {
  errorMessage: string;
  article: Article;
  mode = 'Observable';
  public id: string = null;
  public host: string = 'https://works.bentwhiskerranch.org';
  private sub: any;

  constructor(private articleService: ArticleService, 
    private route: ActivatedRoute,
    private router: Router) { }

  getArticle(id: string): void {
  console.log(id);
    if (id) {
      this.articleService.getArticle(id).subscribe(article => this.article = article,
        error => this.errorMessage = <any>error);

    } 
  }

  ngOnInit() : void {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.getArticle(this.id);
        }
      });
    
  }


}