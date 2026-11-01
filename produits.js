const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];

// Question 1 : Afficher le catalogue
console.log("Catalogue :");

for (let i = 0; i < produits.length; i++) {
  console.log(produits[i].nom + " - " + produits[i].prix + " MAD");
}

// Question 2 : Afficher les produits disponibles
console.log("Produits disponibles");

const disponibles = [];

for (let i = 0; i < produits.length; i++) {
  if (produits[i].stock > 0) {
    disponibles.push(produits[i]);
    console.log(produits[i].nom);
  }
}

console.log("Nombre de produits disponibles : " + disponibles.length);

// Question 3 : Calculer la valeur du stock
console.log("Valeur du stock");

const valeurStock = produits.reduce(function(total, produit) {
  return total + produit.prix * produit.stock;
}, 0);

console.log("Valeur totale : " + valeurStock + " MAD");

// Question 4 : Trouver le produit disponible le moins cher
console.log("Produit disponible le moins cher");

if (disponibles.length === 0) {
  console.log("Aucun produit disponible");
} else {
  let moinsCher = disponibles[0];

  for (let i = 1; i < disponibles.length; i++) {
    if (disponibles[i].prix < moinsCher.prix) {
      moinsCher = disponibles[i];
    }
  }

  console.log(moinsCher.nom + " - " + moinsCher.prix + " MAD");
}

// Question 5 : Créer le résumé
console.log("Résumé");

const resume = produits.map(function(produit) {
  return produit.nom + " - " + produit.prix + " MAD - " +
         produit.stock + " unités";
});

for (let i = 0; i < resume.length; i++) {
  console.log(resume[i]);
}