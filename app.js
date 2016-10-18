var path = require('path');

const express = require('express');
var exphbs = require('express-handlebars');

var routes = require('./routes');

const app = express();

app.set('port',process.env.PORT || 3000 );
app.set('views', path.join(__dirname,'views'));

app.engine('.hbs',exphbs({
  layoutsDir: path.join(app.get('views'),'layouts'),
  partialsDir: path.join(app.get('views'),'partials'), 
  defaultLayout: 'main',
  extname:'.hbs'
}));

app.set('view engine','.hbs');

app.use('/',routes);

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),function() {
  console.log('server on port ',app.get('port'));
});
