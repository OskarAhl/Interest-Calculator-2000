angularApp.controller('calculatorController', ['$scope', 'calculatorService', function($scope, calculatorService) {
  $scope.selectedInterest = '';
  $scope.showTable = false;
  $scope.interest;
  $scope.interestDisplayArr = [];
  $scope.interestSum;
  $scope.totalSum;
  $scope.numberPattern = /^\d{1,}(\.\d{0,2})?$/;
  $scope.timePeriodPattern = /^([0-9]|[1-9][0-9]|100)$/;

  $scope.onSelectInterest = (e) => {
    $scope.reset();
    $scope.interest = Object.assign({}, calculatorService.interest);
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
    $scope.interest = { principal: '', rate: '', timePeriod: '', compoundFrequency: '' };
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
        totalAmount: calculatorService.calculateSimpleAmount(principal, interestRate, i),
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
      var totalAmount = 0;
      var previousAmount = principal
      totalAmount = calculatorService.calculateCompoundAmount(principal, interestRate, i, compoundFrequency);
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
