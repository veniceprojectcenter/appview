angular.module('app').controller('MainCtrl',
 function(
  $scope, $routeParams, $translate, $timeout, $location,
  $mdSidenav,$firebaseObject, $firebaseArray, $firebaseAuth,
  appSrv, widgetSrv
  ) {
  console.log("QUI");
  var ctl = this;
  /*inizializzazione helper*/
  app.app_helper(ctl);

  /*inizializzazione di firebase*/
  ctl.apply = function(){ setTimeout(function () { $scope.$apply(); }, 50); };
  app.login(ctl, $scope, $location, $firebaseObject, $firebaseArray);

  var datasets = [0,-15,20,-10,35,5,55]
  var labels = ["15/08/2017","16/08/2017","17/08/2017","18/08/2017","19/08/2017","20/08/2017","21/08/2017"];
  app.chart_init(ctl,$scope,datasets,labels,"Previsione Maree");

  /*inizializzazione variabili e service (factory) */
  ctl.widgets=[];

  ctl.widgets.push({
    title           : "Venice Tide", 
    span            : {col : 2, row: 2},
    fragment        : "/views/widget/venice_tide.html",
    icon            : "reorder",
    background      : "transparent",
    text_color      : "black",
    now_tide        : 40,
    next_tide        : 110,
    now_tide_color  : "green",
    next_tide_color  : "blue",
    next_tide_time  : "15:30",
    previsione      : ctl.previsione
  });
    ctl.widgets.push({
    title           : "Venice Tide", 
    span            : {col : 2, row: 1},
    fragment        : "/views/widget/venice_tide.html",
    icon            : "reorder",
    background      : "transparent",
    text_color      : "black",
    now_tide        : 40,
    next_tide        : 110,
    now_tide_color  : "green",
    next_tide_color  : "blue",
    next_tide_time  : "15:30",
    previsione      : ctl.previsione
  });

  ctl.appSrv = appSrv;
  ctl.widgetSrv = widgetSrv;
  /*functions per il sidenav */
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }

  ctl.welcomeLoad = function(){
    alert('OK');
  };
  ctl.elementLoad = function(){
    ctl.spinnerShow();

    console.log("Visualizzo singolo elemento", $routeParams);
    // ctl.current_element_id = $routeParams.item_id;
    // ctl.current_element = ctl.appSrv.list[ctl.current_element_id];

    $timeout(function(){
    // setTimeout(function(){
    //   // console.log("Visualizzo singolo elemento", $routeParams);
      ctl.current_element_id = $routeParams.item_id;
      ctl.current_element = ctl.appSrv.list[ctl.current_element_id];
      // $scope.$apply();
    //   // -> https://docs.angularjs.org/api/ng/service/$timeout
    //
      ctl.spinnerHide();
    }, 1500);
  }

  ctl.spinnerHide();
});
