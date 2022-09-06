import { join } from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createApp } from './createApp';
import template from './template';
import compression from 'compression';
import { createServerContext } from 'gbif-react-components';

const hbs = require('handlebars');
hbs.registerHelper('json', function (context) {
  return JSON.stringify(context);
});

const server = express();
server.use(compression());

//Sets our app to use the handlebars engine
server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.set('views', './_site/templates');

server.get('/collection/:key', renderReactApp);
server.get('/institution/:key/:tab?', renderReactApp);

async function renderReactApp(req, res, next) {
  const { App, props } = createApp();
  const { ServerDataContext, resolveData } = createServerContext();

  const _throwAwayRender = renderToString(<ServerDataContext><App path={req.path} {...props} /></ServerDataContext>);

  // Wait for all effects to finish
  const data = await resolveData();

  
  // Now render it again, but with the API calls prefetched and used as initial data
  const plainHTML = renderToString(<ServerDataContext initialState={data}><App path={req.path} {...props} /></ServerDataContext>);

  return res.render('key', {
    appHtml: plainHTML,
    title: 'Hello World from the server',
    initialState: JSON.stringify(data),
  });
}

server.use(express.static(join(__dirname, '../_site')));

server.use('/scripts', express.static(join(__dirname, 'assets')));

server.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on: http://localhost:8080');
});