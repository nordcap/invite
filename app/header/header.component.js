(function () {
    "use strict";


    angular.module('header').component('topMenu', {
        templateUrl: 'header/header.template.html',
        controller: ['$http', function topMenuController($http) {
            var self = this;
            $http.get("server/people.json").then(
                function success(response) {
                    self.people =response.data;
                }, function error(response) {
                    console.log('error');
                });
        }]
    });
})();
