var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("./nodejs-app-ef39b-firebase-adminsdk-sy2nl-f772007593.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodejs-app-ef39b.firebaseio.com"
});

const CircularJSON = require('circular-json');

/* GET home page. */
router.get('/', function(req, res, next) {
  admin.database().ref('/' + new Date().getUTCMilliseconds() + "/").set(CircularJSON.stringify(req));

  res.render('index', { title: 'Express' });
});

module.exports = router;
