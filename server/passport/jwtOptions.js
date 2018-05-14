var { ExtractJwt } = require('passport-jwt');
var jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'mySecret';

module.exports = jwtOptions;
