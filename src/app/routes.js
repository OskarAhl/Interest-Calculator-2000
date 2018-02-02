angularApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/portfolio')

    $stateProvider

      .state('home', {
        url:'/portfolio',
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'portfolioController'
      })
});
