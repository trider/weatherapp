(function() {
  'use strict';

  var ngModule = angular.module('eha.back-button', [
    'eha.back-button.directive',
    'templates/back-button.directive.tpl.html'
  ]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }
})();
