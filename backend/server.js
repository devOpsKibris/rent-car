var express = require('express');
var app = express();

//sub apps
var admin = express();
var webApp = express();

//Routing to subApps from main app
app.use('admin', admin);
app.use('webapp', webApp);
