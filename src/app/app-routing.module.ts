import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { NewsComponent } from './news/news.component';
import { SportsComponent } from './sports/sports.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path:'', component : HomeComponent },
  { path:'about', component : AboutComponent },
  { path:'bollywood-news', component : NewsComponent },
  { path:'sports-news', component : SportsComponent},
  { path:'services', component : ServicesComponent},
  { path:'studentdetails', component: StudentdetailsComponent},
  { path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
