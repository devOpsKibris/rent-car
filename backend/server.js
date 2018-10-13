var express = require('express');
var app = express(); // main app

let PORT = process.env.PORT || 3000;

//sub apps
var admin = express();
var webApp = express();

//Routing to subApps from main app
app.use('/admin', admin);
app.use('/webapp', webApp);

app.get('/', function (req, res) {
    res.send('Rental System Online');
});

admin.get('/', function (req, res) {
    res.send('dashboard API Online');
});

webApp.get('/', function (req, res) {
    res.send('webApp API Online');
});

app.listen(PORT, () => {
    console.log(`server now running on: http://locahost:${PORT}`);
});
