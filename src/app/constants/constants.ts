/**
 * angular-tour-of-heroes application constants.
 */
export class Constants {


    // il8n language files folder
    public static get I18N_TRANSLATE_PATH(): string { return '/i18n/'; }

    // Locale
    public static get LOCALE_FR(): string { return 'fr'; }
    public static get LOCALE_EN(): string { return 'en'; }

    // Urls
    public static get HOME_URL(): string { return 'hereos'; }
    public static get EDIT_HEROES_URL(): string { return 'edit-heroes'; }
    public static get VIEW_HEROES_URL(): string { return 'view-heroes'; }
    public static get SEARCH_HEROES_URL(): string { return 'search-heroes'; }

    // Alert
    public static get ALERT_SUCCESS(): string { return 'success'; }
    public static get ALERT_ERROR(): string { return 'danger'; }
}
