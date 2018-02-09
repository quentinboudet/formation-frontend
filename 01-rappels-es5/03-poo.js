console.log("03 - POO");

function Personne(nom, prenom, pseudo){
  this.nom =nom;
  this.prenom =prenom;
  this.pseudo =pseudo;
  this.getNomComplet = function(){
    return this.nom +" "+ this.prenom +" "+ this.pseudo;
  }
}
var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");

function afficherPersonne(personne){
  console.log(personne.nom, personne.prenom, personne.pseudo, personne.getNomComplet());
}
afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = "jules44";
afficherPersonne(jules);

console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);

jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitiales = function(){
  return this.prenom.charAt(0) + this.nom.charAt(0);
}
console.log(jules.getInitiales());

var robert = {prenom: "Robert", nom: "LEPREFET", pseudo: "robert77",
  getNomComplet: function(){
    return this.nom +" "+ this.prenom +" "+ this.pseudo;
  }
};
afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient){
  Personne.call(this, nom, prenom, pseudo);
  this.numeroClient = numeroClient;
  this.getInfos = function(){
    return this.numeroClient +" "+ this.nom +" "+ this.prenom;
  }
}
var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne(steve);
console.log(steve.numeroClient);

console.log(steve.getInfos());