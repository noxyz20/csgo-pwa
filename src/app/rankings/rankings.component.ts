import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service.spec';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {
  ranks!:any;
  constructor(private dataService: DataService)  {

  }

  ngOnInit(): void {
    this.dataService.getRankings().subscribe((res) => {
      this.ranks = res;
    });
  }
}
