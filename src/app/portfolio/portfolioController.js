angularApp.controller('portfolioController', ['$scope', 'projectData', function($scope, projectData) {
  $scope.selectedInterest = '';
  $scope.projectData = projectData.data;
  $scope.showForm = false;
  $scope.showTable = false;
  $scope.interest;
  $scope.simpleInterestArray = [];

  $scope.onSelectInterest = (e) => {
    $scope.interest = Object.assign({}, projectData.interest);
    $scope.showForm = $scope.selectedInterest ? true : false;
  }
  $scope.onSubmitForm = () => {
    calculateSimpleInterest($scope.interest);
    $scope.showTable = true;
  }
  $scope.reset = () => {
    $scope.interest = Object.assign({}, projectData.interest);
  }
  function calculateSimpleInterest(interestObj) {
    console.log(interestObj);
    const timeSpan = Number(interestObj.timePeriod);
    const principal = Number(interestObj.principal);
    const interestRate = Number(interestObj.rate);
    console.log('timeSpan: ', timeSpan);
    console.log('principal: ', principal);
    console.log('InterestRate: ', interestRate);

    for (let i = 0; i <= timeSpan; i++) {
      $scope.simpleInterestArray.push({
        amount: calculateSimpleAmount(principal, interestRate, i, ''),
        period: i
      });
    }
    console.log($scope.simpleInterestArray);
  }

  function calculateSimpleAmount(principal, interestRate, time, frequency) {
    return principal + (principal * interestRate * time);
  } 

}]);;
