export type Locale = string; // TODO: make it compliant with official locale codes eg. 'en', 'en-UK', 'he'

export interface CountryTranslation {
  locale: Locale;
  text: string;
}
