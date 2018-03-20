import express = require('express');

import {applicationBuilderFromModule} from 'angular-ssr';

import {enableProdMode} from '@angular/core';

import {AppModule} from '../src/app/app.module';
import {absoluteUri, configure, listen} from './http';
import {index} from './paths';

enableProdMode();

const builder = applicationBuilderFromModule(AppModule, index);

const application = builder.build();

const http = express();

configure(http);

http.get(/.*/, async (request, response) => {
  try {
    console.log('server side rendering', request.url);

    const snapshot = await application.renderUri(absoluteUri(request));

    response.send(snapshot.renderedDocument);
  }
  catch (exception) {
    console.error('Rendering exception', exception);

    response.send(builder.templateDocument()); // fall back on client document
  }
});

listen(http).then(port => console.log(`Load http://localhost:${port}/<route>`));
