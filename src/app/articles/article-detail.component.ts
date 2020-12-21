import { Component, OnInit } from '@angular/core';
// import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RelationshipService } from '../service/relationship.service';
import { Relationship } from '../service/relationship';

// @Component({
//   selector: 'article-detail',
//   template: `
//   <div class="container-fluid">
//     <div class="row">
  
//         <section style="min-height:50em" class="col-md-8 mt-2">
//     <div class="article--full">
//       <article *ngIf="article">
        

//         <div *ngFor="let image of article.included"  class="article-full--image row pt-5 pb-3">
//           <img src="{{ host + image.attributes.uri.url }}" class="rounded img-responsive img-fluid">
//         </div>
//  <!-- article.images[0] -->
//         <div class="article-full--title row pb-3">
//           <h4><a href="/article/{{ article.data.id }}">{{ article.data.attributes.title }}</a></h4>
//         </div>
//         <div class="article-full--created row pb-3">
//           <div>
//             <span><i class="fa fa-calendar"></i> {{ article.data.attributes.created }} </span>
//             <br>
//           </div>
//         </div>
//         <div class="article-full--body row py-3">
//           <div [innerHTML]="article.data.attributes.body.processed" style="width: 100%;"></div>
//         </div>
//       </article>
//     </div>
//     </section>
//     <aside class="col-md-4">
//     </aside>
//     </div>
// </div>
//   `,
//   providers: [ArticleService]
// })

// export class ArticleDetailComponent implements OnInit {
//   errorMessage: string;
//   article: Article;
//   mode = 'Observable';
//   public id: string = null;
//   public host: string = 'https://works.bentwhiskerranch.org';
//   private sub: any;

//   constructor(private articleService: ArticleService, 
//     private route: ActivatedRoute,
//     private router: Router) { }

//   getArticle(id: string): void {
//   console.log(id);
//     if (id) {
//       this.articleService.getArticle(id).subscribe(article => this.article = article,
//         error => this.errorMessage = <any>error);

//     } 
//   }

//   getToDos() {
//   	this.articleService.getTodos().subscribe(
//   		(response) => {
//   			console.log(response.body);
//   		})
//   }

//   ngOnInit() : void {
//     this.sub = this.route.params.subscribe(params => {
//       if (params['id']) {
//         this.id = params['id'];
//         this.getArticle(this.id);
//         }
//       });
    
//   }


// }