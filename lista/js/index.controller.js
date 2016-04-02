(function() {
    'use strict';
    angular.module('boilerplate').controller('IndexCtrl', IndexCtrl);

    function IndexCtrl($scope, Store) {
        $scope.sort = 'name';
        $scope.user = {
            name: ''
        };

        $scope.buildUrl = function(){
            var url = "https://docs.google.com/forms/d/10XmBsR-8gFjEAsBVPIwD99skZOwGdrDRkBa_d9-aUmE/formResponse?ifq&";
            if(!$scope.user.name){
                window.alert("É necessário colocar o nome para submeter a prenda");

            }
            url += "entry.1785187425=";
            url += encodeURIComponent(name);
            if(!$scope.user.name){
                window.alert("É necessário colocar o nome para submeter a prenda");

            }

            "&entry.391008835=tv+bonita&entry.501605697=98,45%E2%82%AC&entry.19109304=Total&submit=Submit"
            return url;
        }

        $("[type='number']").keypress(function (evt) {
            evt.preventDefault();
        });

        $scope.buildArray = function(number){
            var a= [];
            for (var i=1;i<=number;i++){
                a.push(i);
            }
            return a;
        }

        Store.list().then(function(products) {
            $scope.products = products;
        });
    }
})();
