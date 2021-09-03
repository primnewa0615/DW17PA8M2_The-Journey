const jwt = require('express-jwt')

exports.auth = jwt({secret:"Talenta21", algorithms: ['HS256']});