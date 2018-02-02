angularApp.service('calculatorService', function($http) {
  this.interestProto = {
    principal: '',
    rate: '',
    timePeriod: '',
    compoundFrequency: ''
  }
  this.calculateSimpleAmount = function calculateSimpleAmount(principal, interestRate, time) {
    //  Simple Interest = Principal * annual interest rate * years(or fraction of years):
    return principal + (principal * interestRate * time);
  };
  this.calculateCompoundAmount = function calculateCompoundAmount(principal, interestRate, i, compoundFrequency) {
    // compund interest = principal * [[1 + (interest/compundFreq)] ^ compoundFreq*years]
    // TO DO: improve rounding - e.g. represent numbers in exponential notation
    return (principal * Math.pow((1 + (interestRate / (compoundFrequency * 100))), (compoundFrequency * i)));
  }

});
