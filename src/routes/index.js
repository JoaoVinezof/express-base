var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const basename = path.basename(__filename);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const route = require(path.join(__dirname, file));

    if (route.endpoints === undefined) {
      return;
    } 

    route.endpoints.forEach(endpoint => {
      router[endpoint.verb](route.path + endpoint.path, route.controller[endpoint.method]);
    });
  })

module.exports = router;
