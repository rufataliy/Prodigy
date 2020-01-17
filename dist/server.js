!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}([function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(1),a=r.n(i),s=r(3),u=r(4),c=r(5),l=r(6),p=r(7),d=r(8),g=s();p.initializeApp({credential:p.credential.cert(d),databaseURL:"https://prodigy-b614e.firebaseio.com"}),g.use(u()),g.use(s.static("dist"));var f=c({secret:l.expressJwtSecret({cache:!0,rateLimit:!0,jwksRequestsPerMinute:5,jwksUri:"https://prodigy-gate.auth0.com/.well-known/jwks.json"}),aud:"https://prodigy-gate.auth0.com/userinfo",iss:"https://prodigy-gate.auth0.com",alg:"RS256"});g.get("/firebase",f,function(){var e=a()(o.a.mark((function e(t,r){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user.sub,e.prev=1,e.next=4,p.auth().createCustomToken(n);case 4:i=e.sent,r.json({firebaseToken:i}),p.auth().updateUser(n,t.user),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r.status(500).send({message:"Something went wrong acquiring a Firebase token.",error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r){return e.apply(this,arguments)}}()),g.get("*",(function(e,t){t.sendFile(__dirname+"/index.html",(function(e){console.log(e+"error")}))})),g.listen(3001,(function(){return console.log("Server running on localhost:3001")}))},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("express-jwt")},function(e,t){e.exports=require("jwks-rsa")},function(e,t){e.exports=require("firebase-admin")},function(e){e.exports=JSON.parse('{"type":"service_account","project_id":"prodigy-b614e","private_key_id":"83ab3b1c63597c50ec95fcf47d9c1cdcc66f3f6c","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZyymAlojj0gtu\\n0Z9zpOxq+w7F/oJdNPY/fnh/AU0PuiXaAe/3TYpAJQQQmz8AY1zPIwO5K1XGmg+P\\nKPMJIbGy7oz451oz/8Y+9AYqIQ8NlQ7EaU7QvuECDO9CmXbkLCJ/r23jVXHAlJ38\\nor7zVJaP1ZECSQGMu8zrdbtFIx3kzfhl61lIMcUoYAzJgEmoqxol4v6iWZIRUR9S\\nvGWP0l8JHLVgDPJdbFknEY71kdzlNRDQTxQeLoX4kGJkmkzTnpp6kvWWEdG5KgEG\\n+tQMw9xossofCbWNOdkr0SL9sRWAXeDcas4VmFcGwm5i0gJqo+PRDw3PTu0AKCCB\\nN5a8ewxrAgMBAAECggEAB1PNySag/P00ZxDEl99WfudROp/fiSNx6qmM6ngqPHTr\\ng7EPmD1/gPBd3/GN+V7ebZYEsMANY9M+4ioJoM1STUe37kKmWijpGNwcsWH18v1V\\nU/SKpmMNoeqHScsGlEWlDkoVXRHv8+YFuYBMnIld6Wfqt+3dEGJb67FFBCrBMJ3q\\nqDGv8jOGjVYQtwsnl/ZE+kNXPOPGN2Ey81p8zrCKBx/R+DBBlJEBpya+XOlGUa1h\\nPG3/8JDRO32ST4U/7MhxL2gGJLDkrMaRjCO+W9LXClxzmrxpYYwhx3RX0GO3S6Ot\\nZZ1E6wTefVNxd6K7YQ6n//qNT+z9BbWu+I/DY5d/MQKBgQD849t1aHhq2bS+fZv1\\nExRfPF9YLgEKhdYvU/C73Y0Ifckgv979qadYxilUtWIZm+2haUIY0UsJ/jRUF+aG\\nanJEIPqNqIwRUHkgSVtvoMKR+5mj+Qf6stm1aZIMsuZrI3jRctyB9OkoOi3JZYM8\\njO4nEeBHxjILV79GUl7bDFUQ2wKBgQDceNChpiCrHu+1gE4k69j2pPmut7Vju1ZB\\nol8b9T8W7z2sGeOy3jgVIaRT4V7uy9/GaRoDHkQMkAqwduZAkqBjUyx1FK4x571Y\\nSwojsngm0Q3SN7MFMyjY7j9newqbNGl/O+s8VriZEhbDoc4vU1TyC+wPiF0m0mR6\\nNJEOPnW/sQKBgEjlOV5HheZu6L28IVdsb4PgOC+H2z74QzwTOyI8A6o979rj09hU\\nretV+5XyTtvI6Z+MYsQamEHCJ71Rwl5ekp92ziJFQlK/Wprm6ldsBInl92yfnSAz\\nq7OyQaota2PYrrvZGxzOxuKUmpwiCclLal6StY6a39QLMBSKK9OCY4bfAoGBALWL\\nztCtic0fRmiA5NhGVXyUUP3sTLN5OggF+qd9BZyPGIu1LejGUAwmjbh8pr2gp/4r\\n4b2bmJF3szWoUuXtV6EyhjNK+j4iA6rG7+yBM6tTDjyCnSm0/PfVB+TgTtWLDSw2\\nXPhsuMljOdeST8RsrFA8PQB1W69yJEb1LlU6XZ+hAoGBAPWSPWbEL/iYCb4kLUs7\\n2ZpVLKK9Ss2h8vIV7VFoUEZePYBSakAAQoyaHxivIYPWeaFe8dikbO1zyUjART5B\\npIsNV0g89i/zFeU5G3IsOtLHskavPvJSJCqJczF32MC7HPlUB9QVivdtIdxcCjiC\\nQR3WNddja7mLQhac2fPASfpa\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-5i6pd@prodigy-b614e.iam.gserviceaccount.com","client_id":"108161580343033292316","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5i6pd%40prodigy-b614e.iam.gserviceaccount.com"}')}]);