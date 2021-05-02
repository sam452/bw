import { Component, OnInit } from '@angular/core';
import { Article } from '../../articles/article';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RelationshipService } from '../../service/relationship.service';
import { Relationship } from '../../service/relationship';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  providers: [ArticleService]
})
export class SuccessComponent implements OnInit {
  errorMessage: string;
  article: Article;
  mode = 'Observable';
  public id: string = null;
  private sub: any;

  constructor(private articleService: ArticleService, 
    private route: ActivatedRoute,
    private router: Router) { }

  getArticle(id: string): void {
  console.log(id);
    if (id) {
      
      this.articleService.getArticle(id).subscribe(article => this.article = article,
        error => this.errorMessage = <any>error);
      console.log(this.article);
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
