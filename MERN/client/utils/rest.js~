let rest, mime, client;

rest = require('rest'),
mime = require('rest/interceptor/mime');
let errorCode = require('rest/interceptor/errorCode'),
  pathPrefix = require('rest/interceptor/pathPrefix');

client = rest.wrap(mime, { mime: 'application/json' })
            //  .wrap(pathPrefix, { prefix: 'http://localhost:3008' })
             .wrap(errorCode, { code: 400 });

module.exports = client;
