document.addEventListener("DOMContentLoaded", function () {
    const bandeauFormulaire = document.getElementById("bandeau-formulaire");
    const formulaireContainer = document.getElementById("formulaire-container");
    const lienOuvertureFormulaire = document.getElementById("lien-ouverture-formulaire");
  
    bandeauFormulaire.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien
  
      if (formulaireContainer.style.display === "none" || formulaireContainer.style.display === "") {
        formulaireContainer.style.display = "block";
        lienOuvertureFormulaire.textContent = "Fermer le formulaire";
        bandeauFormulaire.classList.remove("bandeau-fermeture");
      } else {
        formulaireContainer.style.display = "none";
        lienOuvertureFormulaire.textContent = "Une demande spécifique ? Demander un devis personnalisé";
        bandeauFormulaire.classList.add("bandeau-fermeture");
      }
    });
  });
  