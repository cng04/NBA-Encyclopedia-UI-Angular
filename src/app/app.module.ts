import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsListComponent } from './view/teams/teams-list/teams-list.component';
import { TeamsMapComponent } from './view/teams/teams-map/teams-map.component';
import { CustomMaterialModule } from './custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './view/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsListComponent,
    TeamsMapComponent,
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
