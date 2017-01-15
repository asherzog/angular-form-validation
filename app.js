(function() {
  'use strict'

  angular.module('app', [])
    .component('myForm', {
      controller: function() {
        const vm = this;

        vm.showUsers = function() {
          vm.users = [];
          vm.users.push(vm.user);
          delete vm.user;

        };
      },
      templateUrl: './template.html'
    });
}());
