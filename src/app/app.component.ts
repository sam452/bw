import { Component } from '@angular/core';
import { Article } from './articles/article';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bent Whisker Ranch';

  article: Article;

}
