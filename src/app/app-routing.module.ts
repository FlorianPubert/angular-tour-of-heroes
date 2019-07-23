import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from './components/hero/list/hero-list.component';
import {Constants} from "./constants/constants";

const routes: Routes = [
  { path: '', redirectTo: Constants.HOME_URL, pathMatch: 'full' },
  { path: Constants.HOME_URL, component: HeroListComponent },
  { path: '**', redirectTo: Constants.HOME_URL }
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
