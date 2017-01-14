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
      template: `
      <div class="container">
        <h4>{{$ctrl.users}}</h4>
      </div>
      <form action="#" novalidate ng-submit="$ctrl.showUsers()" name="usersForm" class="container">
        <div class="form-group">
          <label for="userName">User Name:</label>
          <input type="text" name="userName" id="userName" class="form-control" ng-model="$ctrl.user.userName"
                  ng-minlength=3 ng-maxlength=12 required/>

          <div class="has-error" ng-show="usersForm.userName.$dirty && usersForm.userName.$invalid">
            <span class="has-error" ng-show:usersForm.userName.$error.required>userName required</span>
            <span class="has-error" ng-show:usersForm.userName.$error.minlength>userName must be 3 characters long</span>
            <span class="has-error" ng-show:usersForm.userName.$error.maxlength>userName can't be more than 12 characters long</span>
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input name="password" id="password" class="form-control" ng-model="$ctrl.user.password">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input name="email" id="email" class="form-control" ng-model="$ctrl.user.email">
        </div>
        <div class="form-group">
          <label for="zipCode">Zip (5 digits)</label>
          <input name="zipCode" id="zipCode" class="form-control" ng-model="$ctrl.user.zipCode">
        </div>
        <input type="submit" value="Submit" class="btn btn-primary">
      </form>
      `
    });
}());
