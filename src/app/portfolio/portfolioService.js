angularApp.service('projectData', function($http) {
  this.data = [
    {
      name: "50 Shades of RGB:",
      pic: "http://i.imgur.com/r0h0ZVb.png",
      overlay: "HTML, CSS, Vanilla JS",
      play: "https://oskarahl.github.io/50Shades-of-RGB/",
      code: "https://github.com/OskarAhl/50Shades-of-RGB/tree/gh-pages",
      text: "'Guess the color' game",
      codetext: "HTML, CSS, Vanilla JS"
    },
  ];
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
    // var a = (100 * Math.pow((1 + (8/(1*100))), (1*5)));
    // TO DO: improve rounding - e.g. represent numbers in exponential notation
    return (principal * Math.pow((1 + (interestRate / (compoundFrequency * 100))), (compoundFrequency * i)));
  }

});
