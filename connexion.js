window.onload = function() {    
    document.getElementById("submitConnexion").addEventListener("click", function(e) {
        e.preventDefault();
        console.log("submitConnexion");

        let emailInputConnexion = document.getElementById("emailConnexion").value;
        let passwordInputConnexion = document.getElementById("passwordConnexion").value;
        const storedUsers = JSON.parse(localStorage.getItem("users"));

        if (storedUsers) {
            let user = null;
            for (let i = 0; i < storedUsers.length; i++) {
                if (storedUsers[i].email === emailInputConnexion) {
                    user = storedUsers[i];
                    break;
                }
            }

            if (user && user.password === passwordInputConnexion) {
                console.log("Utilisateur connecté avec succès !");
                alert("Connexion réussie");

                localStorage.setItem("user", JSON.stringify(user));
                
                window.location.href = "profil.html";

            } else {
                console.log("Échec de la connexion : Email ou mot de passe incorrect.");
            }

        } else {
            console.log("Aucun utilisateur trouvé. Veuillez vous inscrire d'abord.");
        }
    });
};