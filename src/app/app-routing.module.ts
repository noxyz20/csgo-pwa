import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { MatchsComponent } from './matchs/matchs.component';
import { NewsComponent } from './news/news.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'matchs', component: MatchsComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'rankings', component: RankingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
