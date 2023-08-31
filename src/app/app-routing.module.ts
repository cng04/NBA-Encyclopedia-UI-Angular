import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { TeamsListComponent } from './view/teams/teams-list/teams-list.component';
import { TeamsMapComponent } from './view/teams/teams-map/teams-map.component';
import { PlayersComponent } from './view/players/players.component';
import { AwardsComponent } from './view/awards/awards.component';
import { PageUnderConstructionComponent } from './view/page-under-construction/page-under-construction.component';


const routes: Routes = [
  {
    path: "teams-list",
    component: TeamsListComponent
  },
  {
    path: "teams-map",
    component: TeamsMapComponent
  },
  {
    path: "home-page",
    component: HomePageComponent
  },
  {
    path: "players",
    component: PlayersComponent
  },
  {
    path: "awards",
    component: PageUnderConstructionComponent
    //component: AwardsComponent
  },
  {
    path: '',
    redirectTo: "home-page",
    pathMatch: "full",
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
