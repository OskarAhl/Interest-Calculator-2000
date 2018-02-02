angularApp.controller('calculatorController', ['$scope', 'projectData', function($scope, projectData) {
  $scope.selectedInterest = '';
  $scope.projectData = projectData.data;
  $scope.showTable = false;
  $scope.interest;
  $scope.interestDisplayArr = [];
  $scope.interestSum;
  $scope.totalSum;

  $scope.onSelectInterest = (e) => {
    $scope.interest = Object.assign({}, projectData.interest);
  }
  $scope.onSubmitForm = () => {
    if ($scope.selectedInterest === 'simple') {
      makeSimpleInterestArr($scope.interest);
    } else {
      makeCompoundInterestArr($scope.interest);
    }
    calculateTotals($scope.interestDisplayArr);
    console.log($scope.interestSum, $scope.totalSum);
    $scope.showTable = true;
  }

  $scope.reset = () => {
    // discard old object by copying new object
    $scope.interest = Object.assign({}, projectData.interest);
    $scope.showTable = false;
    $scope.interestDisplayArr = [];
  }

  function calculateTotals (interestArr) {
    $scope.interestSum = 0;
    $scope.totalSum = 0;
    $scope.interestSum = interestArr.reduce((acc, curr) => acc + curr.interestAmount, 0);
    $scope.totalSum = interestArr.reduce((acc, curr) => acc + curr.totalAmount, 0);
  }

  function makeSimpleInterestArr(interestObj) {
    $scope.interestDisplayArr = [];
    const timeSpan = Number(interestObj.timePeriod);
    const principal = Number(interestObj.principal);
    const interestRate = Number(interestObj.rate) / 100;
    const totalInterest = principal * interestRate;

    for (let i = 1; i <= timeSpan; i++) {
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
    
    for (let i = 1; i <= timeSpan; i++) {
      console.log('Compound Interest: ', $scope.interestDisplayArr, i);
      var totalAmount = 0;
      var previousAmount = principal
      totalAmount = projectData.calculateCompoundAmount(principal, interestRate, i, compoundFrequency);
      if (i > 1) {
        previousAmount = $scope.interestDisplayArr[i - 2].totalAmount;
      }
      $scope.interestDisplayArr.push({
        period: i,
        totalAmount: totalAmount,
        interestAmount: (totalAmount - previousAmount), 
      });
    }
  }

}]);;
