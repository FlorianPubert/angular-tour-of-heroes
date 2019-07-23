import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {registerLocaleData} from '@angular/common';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './components/hero/detail/hero-detail.component';
import {HeroListComponent} from './components/hero/list/hero-list.component';
import {HeroService} from './services/hero.service';
import {MessagesComponent} from './components/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import {Constants} from "./constants/constants";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    registerLocaleData(localeEn, Constants.LOCALE_EN);
    registerLocaleData(localeFr, Constants.LOCALE_FR);
  }
}
