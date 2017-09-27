angular.module('app').controller('MainCtrl',
 function(
  $scope, $routeParams, $translate, $http, $timeout, $location,
  $mdSidenav,$firebaseObject, $firebaseArray, $firebaseAuth, NgMap
  ) {
  var ctl = this;
  ctl.firebase = firebase;
  //GROUP NAME OF THE DATASETS
  //ctl = {};


  /*helper initialization*/
  app.app_helper(ctl);
  /*function for applying external javascript in an angular envroiment */
  ctl.apply = function(){ setTimeout(function () { $scope.$apply(); }, 50); };
  /* login functions */
  app.login(ctl, $scope, $location, $firebaseObject, $firebaseArray);
  /*map initialization*/
  app.init_map(ctl, $firebaseArray, NgMap);

  //ctl.read_geojson("Bell Tower Page Final", $firebaseArray);

  /*functions per il sidenav */
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
  
  //ctl.read_geojson(ctl.GROUP_NAMES, ctl.firebase);
  ctl.import_members(ctl.GROUP_NAMES);
  //app.import_markers(ctl.GROUP_NAMES);
});
