'use strict';

angular.module('battlrApp.version', [
  'battlrApp.version.interpolate-filter',
  'battlrApp.version.version-directive'
])

.value('version', '0.1');
