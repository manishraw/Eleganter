import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  resData;
  newsData;
  totalNews;
  constructor( private http:HttpClient) { 
    const url = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7e4910b4041b48b3b4e40bf67af05969';
    this.http.get(url).subscribe(res =>{
      this.resData = res;
      if(this.resData.status == "ok"){
        this.newsData = this.resData.articles;
        this.totalNews = this.resData.totalResults;
      }
      
      console.log(this.resData);
    });
  }

  ngOnInit() {
  }

}
