(function() {
    'use strict';

    angular.module('boilerplate').filter('toFixed', function() {
        return function (val) {
            return val.toFixed(2);
        };
    });
})();
