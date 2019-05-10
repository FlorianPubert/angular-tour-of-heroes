import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from './components/hero/list/hero-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroListComponent },
  { path: '**', redirectTo: 'heroes' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
