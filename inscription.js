/* Sauvegarder dans le localStorage les données */

window.onload = init;

function init() { 

    document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();
        console.log("submit");

        let loginInput = document.getElementById("login").value;
        let emailInput = document.getElementById("email").value;
        let passwordInput = document.getElementById("password").value;
        let confirmInput = document.getElementById("confirmPassword").value;

        let storedUsers = JSON.parse(localStorage.getItem("users")) || []; 

        // Vérification si le login ou l'email existe déjà
        let loginExists = storedUsers.some(user => user.login === loginInput);
        let emailExists = storedUsers.some(user => user.email === emailInput);

        if (loginExists) {
            console.log("Login déjà utilisé.");
            alert("Login déjà utilisé. Veuillez en choisir un autre.");
            return; 
        }

        if (emailExists) {
            console.log("Email déjà utilisé.");
            alert("Email déjà utilisé. Veuillez en choisir un autre.");
            return; 
        }
           
        // Vérification des mots de passe
        if (passwordInput === confirmInput) {
            const userData = {
                login: loginInput,
                email: emailInput,
                password: passwordInput
            };

            let storedUsers = JSON.parse(localStorage.getItem("users")) || []; 
            storedUsers.push(userData);
            localStorage.setItem("users", JSON.stringify(storedUsers));

            console.log("Inscription réussie");
            window.location.href = "connexion.html";
        } else {
            console.log("Les mots de passe sont différents");
        }

    });
}
