angularApp.controller('portfolioController', ['$scope', 'projectData', function($scope, projectData) {
  $scope.selectedInterest = '';
  $scope.projectData = projectData.data;
  $scope.showForm = false;
  $scope.showTable = false;
  $scope.interest;

  $scope.onSelectInterest = (e) => {
    $scope.interest = Object.assign({}, projectData.interest);
    $scope.showForm = $scope.selectedInterest ? true : false;
  }
  $scope.onSubmitForm = () => {
    console.log($scope.interest);
    $scope.showTable = true;
  }
  $scope.reset = () => {
    $scope.interest = Object.assign({}, projectData.interest);
  }

}]);;
