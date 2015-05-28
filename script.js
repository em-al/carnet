$adresse = document.getElementById("carnet");
$bouton_afficher = document.getElementById("afficher");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$ajouter = document.getElementById("ajouter");

var personne = [{prenom: "paco", nom: "mogette", avatar: "http://icdn.pro/images/fr/a/n/animal-oiseau-t9tuqui-icone-7986-128.png" }, 
                {prenom: "charlie", nom: "licorne"}];

function retourner (objet) {
  return objet.prenom + " " + objet.nom + "<img src=objet.avatar />";
}

function afficher () {
  element="";
_.each(personne, function(objet) {
  element += "<li>" + retourner(objet) + "</li>";
});

 $adresse.innerHTML = element;
}

function ajouter () {

personne.push ({ prenom: $prenom.value, nom: $nom.value}); 
afficher();
}

function rechercher () {
_.each(personne, function(objet) {
  if ($prenom.value == objet.prenom ) 
}
) 

}

$ajouter.onclick = ajouter;
$bouton_afficher.onclick = afficher;
