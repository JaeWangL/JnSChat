import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import * as en from './en.json';
import * as ko from './ko.json';

i18n.fallbacks = true;
i18n.translations = { en, ko };

const fallback = { languageTag: 'en', isRTL: false };
const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback;
i18n.locale = languageTag;
