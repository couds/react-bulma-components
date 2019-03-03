const fs = require('fs');
const path = require('path');

fs.readdir(path.resolve(__dirname, '..', 'src/locales/lang'), (err, files) => {
  const locales = files.map(file => file.split('.').shift());
  const keys = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '.translations/en.json'), 'utf8'));
  
  locales.forEach((locale) => {
    const translations = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', `src/locales/lang/${locale}.json`), 'utf8'));
    const t = Object.keys(keys).reduce((acc, current) => Object.assign({}, acc, {
      [current]: translations[current] || `__${keys[current]}__`,
    }), {});
    fs.writeFileSync(path.resolve(__dirname, '..', `src/locales/lang/${locale}.json`), JSON.stringify(t, Object.keys(t).sort(), 2));
  });
});

// const locales = require('../src/locales');

