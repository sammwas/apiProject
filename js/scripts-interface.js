// scripts-interface js

var GetInfo=require('./../js/scripts.js').getInfoModule;

$(document).ready(function() {
  $('#github').submit(function(event) {
    event.preventDefault();
    var profile = new GetInfo();
    var githubname= $('#accountname').val();
    console.log(githubname);
    // $('#accountName').val("");
    profile.lookup(githubname);
    });
});
