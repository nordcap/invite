(function(){
  "use strict";


  angular.module('header').
  component('headerInvite',{
    templateUrl:'header/header.template.html',
    controller: ['$http', function HeaderController($http){
        this.name = 'Nordcap';
    }]
  });
})();