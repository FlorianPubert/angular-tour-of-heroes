import {Injectable} from '@angular/core';
import {HEROES} from '../mocks/mock-heroes';
import {Hero} from '../models/hero';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
