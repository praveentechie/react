let rest, mime, client;

rest = require('rest'),
mime = require('rest/interceptor/mime');
let errorCode = require('rest/interceptor/errorCode'),
  template = require('rest/interceptor/template'),
  pathPrefix = require('rest/interceptor/pathPrefix');

client = rest.wrap(mime, { mime: 'application/json' })
             .wrap(template, { params: { lang: 'en-us' } })
             .wrap(errorCode, { code: 400 });

module.exports = client;

