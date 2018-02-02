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
    compoundFreq: ''
  }
});
