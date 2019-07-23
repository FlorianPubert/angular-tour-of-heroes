import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Constants} from "./constants/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  private currentLang: string = Constants.LOCALE_FR;

  constructor(private translate: TranslateService) {

    // app's languages
    translate.addLangs([Constants.LOCALE_EN, Constants.LOCALE_FR]);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(Constants.LOCALE_FR);
  }

  /**
   * Set the language translation.
   * @param language The language to set
   */
  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }

  getUnusedLanguage(): string {
    if (this.currentLang == Constants.LOCALE_FR) {
      return Constants.LOCALE_EN;
    } else {
      return Constants.LOCALE_FR;
    }
  }
}
