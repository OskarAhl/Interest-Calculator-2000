angularApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/portfolio')

    $stateProvider

      .state('home', {
        url:'/portfolio',
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'portfolioController'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
      })
});
