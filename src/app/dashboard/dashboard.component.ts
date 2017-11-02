import { Component, OnInit }         from '@angular/core';
import { ActivatedRoute, ParamMap }  from '@angular/router';
import { SlicePipe }                 from '@angular/common';

import { Hero }                      from '../hero/hero';
//./hero';
import { HeroService }               from '../hero-service/hero.service';
//./hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  hero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes
    })
  }
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    //   .subscribe(hero => this.hero = hero);
}

///////////////////////////////////////////////////////////////////////////////////
// IDEAS GRAVEYARD //
/////////////////////

  //can use hero schema from hero file
    /*
     Hero {
      id: string;
      name: string;
    }
    */
  //needs to pass heroes into html
