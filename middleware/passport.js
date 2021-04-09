const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
// const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');

const models = require('../models');

const { keys } = require('../config/config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.accessSecret,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const token = await models.token.findOne({ where: { id: payload.id } });
        if (token) {
          const decodedToken = jwt.verify(token.dataValues.accessToken, keys.accessSecret);
          if (decodedToken) {
            if (decodedToken.time === payload.time) {
              done(null, token.dataValues.id);
            } else {
              done(null, false);
            }
          } else {
            done(null, false);
          }
        } else {
          done(null, false);
        }
      } catch (e) {
        console.log(e);
      }
    }),
  );
};
