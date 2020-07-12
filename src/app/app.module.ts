import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DonateComponent } from './donate/donate.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendService } from './service/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { AmzwishComponent } from './amzwish/amzwish.component';
import { AdoptComponent } from './adopt/adopt.component';
import { ArticlesComponent } from './articles/articles.component';
import { NoSanitizePipe } from './no-sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    SuccessComponent,
    SidebarComponent,
    DonateComponent,
    PrivacyComponent,
    AmzwishComponent,
    AdoptComponent,
    ArticlesComponent,
    NoSanitizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers  : [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
