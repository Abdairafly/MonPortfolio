document.addEventListener("DOMContentLoaded", function() {
  var contactForm = document.getElementById("contact");
  var errorModal = new bootstrap.Modal(document.getElementById("error-modal"));
  var successModal = new bootstrap.Modal(document.getElementById("success-modal"));
  var errorMessage = document.getElementById("error-message");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    var firstNameInput = document.getElementById("first-name");
    var lastNameInput = document.getElementById("last-name");
    var emailInput = document.getElementById("email");
    var consentCheckbox = document.getElementById("consent-checkbox");
    var messageInput = document.getElementById("message");

    var errors = [];

    if (firstNameInput.value.trim() === "") {
      errors.push("Le prénom est requis.");
    }

    if (lastNameInput.value.trim() === "") {
      errors.push("Le nom est requis.");
    }

    if (!emailIsValid(emailInput.value.trim())) {
      errors.push("Veuillez saisir une adresse e-mail valide.");
    }

    if (!consentCheckbox.checked) {
      errors.push("Vous devez accepter les conditions.");
    }

    if (messageInput.value.trim() === "") {
      errors.push("Le message est requis.");
    }

    if (errors.length > 0) {
      // Construire un message d'erreur en utilisant les erreurs collectées
      errorMessage.textContent = "Veuillez corriger les erreurs suivantes : \n" + errors.join("\n");
      errorModal.show(); // Utilisez show() au lieu de show
    } else {
      successModal.show(); // Utilisez show() au lieu de show
      // Réinitialiser le formulaire ici si nécessaire
    }
  });

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  var errorModalCloseButton = document.querySelector("#error-modal .modal-content .close");
  errorModalCloseButton.addEventListener("click", function() {
    errorModal.hide();
  });

  var successModalCloseButton = document.querySelector("#success-modal .modal-content .close");
  successModalCloseButton.addEventListener("click", function() {
    successModal.hide();
  });
});
