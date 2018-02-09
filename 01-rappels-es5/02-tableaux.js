console.log("02 - Tableaux");

var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];
villes.forEach(function(e){
  return console.log(e)
});
var lettreADansToutesLesVilles = villes.every(function(e){
  return e.includes("a");
});
console.log("lettreADansToutesLesVilles == " + lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(function(e){
  return e.includes("-");
});
console.log("auMoinsUneVilleAvecUnTiret == " + auMoinsUneVilleAvecUnTiret);

var sansTiretSansEspace = function(e) {
  return !e.includes("-") && !e.includes(" ");
}
var villesSansTiretSansEspace = villes.filter(sansTiretSansEspace)
console.log("villesSansTiretSansEspace == " + villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function(e){
  return e.endsWith("s");
}).map(function(e){
  return e.toUpperCase();
});
console.log("villesMajusculeSeTerminantParS == " + villesMajusculeSeTerminantParS);