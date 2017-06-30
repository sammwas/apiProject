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
