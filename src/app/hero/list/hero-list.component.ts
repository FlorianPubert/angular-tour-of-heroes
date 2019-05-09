import {Component, OnInit} from '@angular/core';
import {Hero} from '../../models/hero';
import {HEROES} from '../../mocks/mock-heroes';
import {HeroService} from '../../service/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.initHeroes();
  }

  initHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
