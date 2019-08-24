import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { StudentdetailsService } from './studentdetails.service';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { SportsComponent } from './sports/sports.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    StudentdetailsComponent,
    TestimonialComponent,
    NewsComponent,
    SportsComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StudentdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
