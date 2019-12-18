import i18n from 'i18n-js';

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export const translate = (key: string, options?: object): string => (key ? i18n.t(key, options) : '');
