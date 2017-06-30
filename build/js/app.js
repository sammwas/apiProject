(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey="87433827b2b577a90908aace425077e77d27d9f2";

},{}],2:[function(require,module,exports){
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

},{"./../js/scripts.js":3}],3:[function(require,module,exports){
// scripts js
var apiKey=require('./../.env').apiKey;
function GetInfo(){

}
 GetInfo.prototype.lookup = function(name){
  $.get('https://api.github.com/users/' +name+ '?access_token='+apiKey).then(function(response){
    console.log(response);
    $('.image').text( response.avatar_url);
    $('.login').text(response.login );
    $('.url').text(response.html_url);
    $('.repos').text(response.public_repos);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};


exports.getInfoModule=GetInfo;

},{"./../.env":1}]},{},[2]);
