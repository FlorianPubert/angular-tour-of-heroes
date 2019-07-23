import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private translate: TranslateService) {

    translate.addLangs(['en', 'fr']);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  isCurrentLanguage(language: string):boolean {
    return this.translate.currentLang == language;
  }
}
