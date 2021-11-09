import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service.spec';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.scss']
})
export class MatchsComponent implements OnInit {
  matchs!:any;
  constructor(private dataService: DataService)  {

  }

  ngOnInit(): void {
    this.dataService.getMatchs().subscribe((res) => {
      this.matchs = res;
    });
  }
}
