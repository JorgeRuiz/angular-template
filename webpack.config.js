/* global battlrApp: true */
/* jshint quotmark:true */

'use strict';

var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

var bowerDir = __dirname + '/app/bower_components/';
var nodeDir = __dirname + '/node_modules/';
var angularDir = __dirname + '/app/';
var vendorDir = __dirname + '/app/vendor/';
var jqueryDir = __dirname + '/app/vendor/jquery/';

var config = [

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////// Core Mobile Package
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: 'app',
    context: __dirname + '/app/',
    entry: 'app.js',

    addVendor: function(name, path) {
      this.resolve.alias[name] = path;
      this.module.noParse.push(new RegExp(path));
    },

    resolve: {
      root: __dirname + '/app/',
      extensions: ['', '.js', '.json'],
      alias: {

        // Utilities
        'modernizr': vendorDir + 'modernizr.js',
        'lodash': vendorDir + 'lodash.js',

        // jQuery Bundle
        'jquery': jqueryDir + 'jquery.js',

        // AngularJS
        'view1': angularDir + 'views/view1/view1.js',
        'view2': angularDir + 'views/view2/view2.js',
        'login': angularDir + 'views/login/login.js'

      }
    },
    output: {
      path: __dirname + '/public/js/',
      filename: 'bundle.js'
    },

    cache: true,
    cacheable: true,
    debug: true,
    watch: true,
    watchDelay: 200,
    devtool: "#inline-source-map"

  }
]

module.exports = config;