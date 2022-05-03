require('dotenv').config();
require('./auth/passport');

const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const webRouter = require('./routes/webRoutes');
const authRouter = require('./routes/authRoutes');
const staffRouter = require('./routes/staffRoutes');

const error = require('./controllers/404Controller');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.engine('mst', mustacheExpress(`${__dirname}/views`, '.mst'));
app.set('view engine', 'mst');

app.use('/', webRouter);
app.use('/', authRouter);
app.use('/staff',
  passport.authenticate('jwt', {
    session: false,
    failureRedirect: '/login',
  }),
  staffRouter,
);
app.get('*', error.notFound);
app.listen(3000, () => {
  console.log('Server started on port 3000. Ctrl^c to quit.');
  })  