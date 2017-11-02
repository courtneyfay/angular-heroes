import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
//./dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
//./hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
//./heroes.component';
import { HeroService }          from './hero-service/hero.service';
//./hero.service';

import { AppRoutingModule }     from './app-routing.module';
// ./app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
