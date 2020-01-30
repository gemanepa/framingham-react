const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const deTranslation = require('./src/i18n/de.json');
const enTranslation = require('./src/i18n/en.json');
const esTranslation = require('./src/i18n/es.json');
const frTranslation = require('./src/i18n/fr.json');
const itTranslation = require('./src/i18n/it.json');
const ptTranslation = require('./src/i18n/pt.json');

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    app.render(req, res, '/index', { translations: enTranslation });
  });

  server.get('/de', (req, res) => {
    app.render(req, res, '/index', { translations: deTranslation });
  });

  server.get('/en', (req, res) => {
    app.render(req, res, '/index', { translations: enTranslation });
  });

  server.get('/es', (req, res) => {
    app.render(req, res, '/index', { translations: esTranslation });
  });

  server.get('/fr', (req, res) => {
    app.render(req, res, '/index', { translations: frTranslation });
  });

  server.get('/it', (req, res) => {
    app.render(req, res, '/index', { translations: itTranslation });
  });

  server.get('/pt', (req, res) => {
    app.render(req, res, '/index', { translations: ptTranslation });
  });

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
