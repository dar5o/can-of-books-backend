'use strict';

const jwksClient = require('jwks-rsa');

const client = jwksClient({
  // this url comes from your app on the auth0 dashboard 
  jwksUri: 'https://dev-rdcw1aj5.us.auth0.com/.well-known/jwks.json'
});

const getKey = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};



module.exports = getKey;