import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service.spec';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news!:any;
  constructor(private dataService: DataService)  {

  }

  ngOnInit(): void {
    this.dataService.getNews().subscribe((res) => {
      this.news = res;
    });
  }
}
