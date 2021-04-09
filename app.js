const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const authRoutes = require('./routes/auth');
const fileRoutes = require('./routes/file');
const infoRoutes = require('./routes/info');
const errorAuthenticateRoutes = require('./routes/errorAuthenticate');
const swaggerOptions = require('./swaggerDocs/swaggerOptions');
const models = require('./models');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());
require('./middleware/passport')(passport);

models.sequelize.sync()
  .then(console.log('DATABASE OK'))
  .catch((err) => console.log(err));

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/auth', authRoutes);
app.use('/api/file', fileRoutes);
app.use('/api/info', infoRoutes);
app.use('/api/error-authenticate', errorAuthenticateRoutes);

module.exports = app;
