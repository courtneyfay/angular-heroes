import { NgModule }             from '@angular/core';
import { RouterModule, Routes } 				from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
// ./dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
//./hero-dhero-detail.component';
import { HeroesComponent }			from './heroes/heroes.component';

const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

/*
ROUTES:
{ path: 'dashboard',  component: DashboardComponent },
{ path: 'detail/:id', component: HeroDetailComponent },
{ path: 'heroes',     component: HeroesComponent }

dashboard.component.html 							[routerLink]="['/detail', hero.id]"
heroes.component.ts										this.router.navigate(['/detail', this.selectedHero.id]);
app.component.ts											<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
  																		<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
*/




