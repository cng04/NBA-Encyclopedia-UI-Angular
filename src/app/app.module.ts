import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsListComponent } from './view/teams/teams-list/teams-list.component';
import { TeamsMapComponent } from './view/teams/teams-map/teams-map.component';
import { CustomMaterialModule } from './custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './view/navigation/navigation.component';
import { PlayersComponent } from './view/players/players.component';
import { AwardsComponent } from './view/awards/awards.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { PageUnderConstructionComponent } from './view/page-under-construction/page-under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsListComponent,
    TeamsMapComponent,
    PlayersComponent,
    AwardsComponent,
    PageNotFoundComponent,
    PageUnderConstructionComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
