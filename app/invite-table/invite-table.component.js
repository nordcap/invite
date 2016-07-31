(function () {
    "use strict";


    angular.module('inviteTable').component('inviteTable', {
        templateUrl: 'invite-table/invite-table.template.html',
        controller: ['$http', function inviteTableController($http) {
            var self = this;
            $http.get("server/people-list.json").then(
                function success(response) {
                    self.people_list = response.data;
                }, function error(response) {
                    console.log('error');
                });
        }]
    });
})();
