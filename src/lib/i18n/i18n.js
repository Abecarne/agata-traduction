import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Importer les fichiers JSON
import fr from './locales/fr.js';
import pl from './locales/pl.js';

// Enregistrer les traductions
register('fr', () => Promise.resolve(fr));
register('pl', () => Promise.resolve(pl));

// Initialiser la configuration
init({
  fallbackLocale: 'fr',
  initialLocale: getLocaleFromNavigator() || 'fr'
});