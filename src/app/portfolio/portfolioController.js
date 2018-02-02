angularApp.controller('portfolioController', ['$scope', 'projectData', function($scope, projectData) {
  $scope.selectedInterest = '';
  $scope.projectData = projectData.data;
  $scope.showTable = false;
  $scope.interest;
  $scope.interestDisplayArr = [];

  $scope.onSelectInterest = (e) => {
    $scope.interest = Object.assign({}, projectData.interest);
  }
  $scope.onSubmitForm = () => {
    if ($scope.selectedInterest === 'simple') {
      makeSimpleInterestArr($scope.interest);
    } else {
      makeCompoundInterestArr($scope.interest);
    }
    $scope.showTable = true;
  }
  $scope.reset = () => {
    // discard old object by copying new object
    $scope.interest = Object.assign({}, projectData.interest);
    $scope.showTable = false;
    $scope.interestDisplayArr = [];
  }
  
  function makeSimpleInterestArr(interestObj) {
    $scope.interestDisplayArr = [];
    const timeSpan = Number(interestObj.timePeriod);
    const principal = Number(interestObj.principal);
    const interestRate = Number(interestObj.rate) / 100;
    const totalInterest = principal * interestRate;

    for (let i = 0; i <= timeSpan; i++) {
      $scope.interestDisplayArr.push({
        period: i,
        totalAmount: projectData.calculateSimpleAmount(principal, interestRate, i),
        interestAmount: totalInterest
      });
    }
    console.log('Simple Interest: ', $scope.interestDisplayArr);
  };

  function makeCompoundInterestArr(interestObj) {
    $scope.interestDisplayArr = [];
    const timeSpan = Number(interestObj.timePeriod);
    const principal = Number(interestObj.principal);
    const interestRate = Number(interestObj.rate);
    const compoundFrequency = Number(interestObj.compoundFrequency);
    
    for (let i = 0; i <= timeSpan; i++) {
      var totalAmount = 0;
      var previousAmount = 0
      if (i > 0) {
        totalAmount = projectData.calculateCompoundAmount(principal, interestRate, i, compoundFrequency);
        previousAmount = $scope.interestDisplayArr[i - 1].totalAmount;
      }
      $scope.interestDisplayArr.push({
        period: i,
        totalAmount: totalAmount,
        interestAmount: (totalAmount - previousAmount), 
      });
    }
    console.log('Compound Interest: ', $scope.interestDisplayArr);
  }

}]);;
