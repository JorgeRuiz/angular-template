module.exports = function(config) {
  config.set({
        plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    basePath: './',
    frameworks: ['jasmine', 'tap'],
    files: [
      'app/js/bower_components/angular/angular.js',
      'app/js/bower_components/angular-route/angular-route.js',
      'app/js/bower_components/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      '_tests_/**/*.js'
    ],

    preprocessors: {
      'test/**/*.js': ['webpack']
    },

    webpack: {
      node: {
        fs: 'empty'
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome_small', 'PhantomJS_custom'],
    singleRun: false,

    customLaunchers: {
      'Chrome_small': {
        base: 'Chrome',
        flags: [
          '--window-size=400,400',
          '--window-position=-400,0'
        ]
      },

      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};