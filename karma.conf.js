module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'app/js/bower_components/angular/angular.js',
      'app/js/bower_components/angular-route/angular-route.js',
      'app/js/bower_components/angular-mocks/angular-mocks.js',
      'app/js/components/**/*.js',
      'app/js/views/view*/**/*.js',
      'app/js/views/login/**/*.js',
      '_tests_/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    // browsers : ['Chrome'],

    browsers: ['Chrome_small', 'PhantomJS_custom'],

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

    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};