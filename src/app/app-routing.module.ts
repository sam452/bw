import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuccessComponent } from './success/success.component';
import { DonateComponent } from './donate/donate.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AmzwishComponent } from './amzwish/amzwish.component';
import { AdoptComponent } from './adopt/adopt.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './articles/articles.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'successes', component: SuccessComponent},
  {path: 'adopt', component: AdoptComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: '*', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
