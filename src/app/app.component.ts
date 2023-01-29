import { Component, OnInit, isDevMode } from '@angular/core';
import{Router, NavigationEnd} from '@angular/router';
import { environment } from '../environments/environment';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bent Whisker Ranch';

  constructor(public router: Router){   
      this.router.events.subscribe(event => {
         if(event instanceof NavigationEnd){
             gtag('config', environment.gtkey, 
                   {
                     'page_path': event.urlAfterRedirects
                   }
                  );
          }
       }
    )}

}

