import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  resData;
  newsData;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    removeSummaryDuplicates;
    const url = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7e4910b4041b48b3b4e40bf67af05969';
    this.http.get(url).subscribe(res => {
      this.resData = res;
      this.newsData = this.resData.articles;
      console.log(this.newsData);
    });
  }

}
