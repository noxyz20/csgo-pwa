import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service.spec';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results!:any;
  constructor(private dataService: DataService)  {

  }

  ngOnInit(): void {
    this.dataService.getResults().subscribe((res) => {
      this.results = res;
    });
  }
}
