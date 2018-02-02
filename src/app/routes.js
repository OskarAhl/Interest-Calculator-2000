angularApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/calculator')

    $stateProvider

      .state('home', {
        url:'/calculator',
        templateUrl: 'app/calculator/calculator.html',
        controller: 'calculatorController'
      })
});
