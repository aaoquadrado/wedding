(function() {
    'use strict';

    angular.module('boilerplate').factory('Store', Store);

    function Store($http, $q) {
        return {
            list: function() {
                var deferref = $q.defer();

                $http.get('data/store.json').success(deferref.resolve).error(deferref.reject);

                return deferref.promise;
            }
        };
    }
})();
