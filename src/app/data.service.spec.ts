//import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor (private http: HttpClient) { }

  getNews() {
    return this.http.get('https://hltv-api.vercel.app/api/news.json')
  }
  getMatchs() {
    return this.http.get('https://hltv-api.vercel.app/api/matches.json')
  }
  getResults() {
    return this.http.get('https://hltv-api.vercel.app/api/results.json')
  }
  getRankings() {
    return this.http.get('https://hltv-api.vercel.app/api/teams.json')
  }
}
  /*describe('DataService', () => {

let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/
