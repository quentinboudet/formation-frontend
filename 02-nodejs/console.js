var service = require('./service.js');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var options = [
  function(){
    var listeP = service.listerTousLesPresentateurs();
    listeP.forEach(e => {
      console.log("//////////", e.firstname, e.lastname);

      var donnesKeys = Object.keys(e).filter(key => ["id", "topspeaker", "image"].indexOf(key) > 0);
      donnesKeys.forEach(key =>{
        console.log(key + ": "+ e[key]);
      });
    });
  },
  function(){
    var listeP = service.listerTopPresentateurs();
    listeP.forEach(e => {
      console.log(e.firstname, e.lastname);
    });
  },
  function(){
    service.listerToutesLesSessions().forEach(e =>{
      console.log(e.title);
    });
  },
  function(){
    rl.question("Saisissez l'identifiant de la session", (answer) => {
      var session = service.trouverUneSession(answer);
      console.log("/////////////Description");
      console.log(session.desc);
      console.log("/////////////Presentateurs");
      session.speakers.forEach(presentateurId => {
        console.log(presentateurId);
      });
    });
  }
]

function menuboucle(){
  rl.question('*** Application Conférence *** \n'
    + '1. Liste de tous les présentateurs \n'
    + '2. Top présentateurs \n'
    + '3. Liste des sessions \n'
    + '4. Détail d\'une session \n'
    + 'Q Pour quitter \n', 
  (answer) => {
    if(answer == "q"){
      rl.close();
    }
    else{

      if(!isNaN(answer) && answer < 0 && answer > 4){
        console.log(`Veillez saisir une valeur entre 1 et 4`);
      }
      else{
        options[answer-1]();
      }
      menuboucle();
    }
  });  
}
menuboucle();