var package = require('./data/devfest-2015.js');
module.exports={
  listerTousLesPresentateurs: function(){
    return package.speakers;
  },
  listerToutesLesSessions: function(){
    return package.sessions
  },
  trouverUneSession: function(idSession){
    var k = package.sessions.filter(function(e){
      return e.id == idSession;
    });
    return k[0];
  },
  listerTopPresentateurs: function(){
    return package.speakers.filter(function(e){
      return e.topspeaker === true;
    });
  }
}