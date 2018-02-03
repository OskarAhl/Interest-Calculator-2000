angularApp.service('calculatorService', function($http) {
  this.interestProto = {
    principal: '',
    rate: '',
    timePeriod: '',
    compoundFrequency: ''
  };
  this.calculateSimpleAmount = function calculateSimpleAmount(principal, interestRate, time) {
    //  Simple Interest = Principal * annual interest rate * years(or fraction of years):
    if (typeof principal === 'number' && typeof interestRate === 'number' && typeof time === 'number') {
      return principal + (principal * interestRate * time);
    } else {
      return 0;
    }
  };

  this.calculateCompoundAmount = function calculateCompoundAmount(principal, interestRate, i, compoundFrequency) {
    // compund interest = principal * [[1 + (interest/compundFreq)] ^ compoundFreq*years]
    // TO DO: improve rounding - e.g. represent numbers in exponential notation
    if (typeof principal === 'number' && typeof interestRate === 'number' && typeof i === 'number' && typeof compoundFrequency === 'number') {
      return (principal * Math.pow((1 + (interestRate / (compoundFrequency * 100))), (compoundFrequency * i)));
    } else {
      return 0;
    }
  }

});
