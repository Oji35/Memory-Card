window.onload = init;

function init() {
    const userData = localStorage.getItem("user");

    if (userData) {       
        const user = JSON.parse(userData);  
        
        const loginDisplay = document.getElementById("loginDisplay");
        const emailDisplay = document.getElementById("emailDisplay");

        loginDisplay.textContent = `Bienvenue, ${user.login}!`;
        emailDisplay.textContent = user.email;

    } else {
        const loginDisplay = document.getElementById("loginDisplay");
        const emailDisplay = document.getElementById("emailDisplay");
        
        loginDisplay.textContent = "Aucun utilisateur connecté.";
        emailDisplay.textContent = "Aucun email disponible.";
    }

    // Choix des decks
    document.getElementById("choixCartes").addEventListener("change", function() {
        var selectedOption = this.value;
        var imageElement = document.getElementById("image");

       if (selectedOption === "optionTLK") {
            imageElement.src = "./images/set de cartes/TLK.JPG"; 
            localStorage.setItem("selectedDeck", "TLK");  
        } else if (selectedOption === "optionUFC") {
            imageElement.src = "./images/set de cartes/mma.JPG";
            localStorage.setItem("selectedDeck", "mma");
        } else if (selectedOption === "optionPokemon") {
            imageElement.src = "./images/set de cartes/pokemon.JPG";
            localStorage.setItem("selectedDeck", "pokemon");
        } else if (selectedOption === "optionSimpson") {
            imageElement.src = "./images/set de cartes/simpson.jpg";
            localStorage.setItem("selectedDeck", "simpson");
        } else if (selectedOption === "optionWWE") {
            imageElement.src = "./images/set de cartes/wwe.JPG";
            localStorage.setItem("selectedDeck", "wwe");
        } else if (selectedOption === "optionL1") {
            imageElement.src = "./images/set de cartes/l1.JPG";
            localStorage.setItem("selectedDeck", "l1");
        }

        console.log("Deck sélectionné et enregistré dans localStorage.");
    });

    document.querySelector(".validation").addEventListener("click", function(e) {
        e.preventDefault(); 
        console.log("Paramètres enregistrés. Redirection vers la page jeux.");
        window.location.href = "jeux.html";
    });
}