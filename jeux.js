window.onload = function () {
    let selectedDeck = localStorage.getItem("selectedDeck");

    if (!selectedDeck) {
        selectedDeck = "TLK";  
        localStorage.setItem("selectedDeck", selectedDeck); 
    }

    const plateau = document.getElementById('plateau');
    const decks = {
        "TLK": [
            "./images/TLK/1.png", "./images/TLK/2.png", "./images/TLK/3.png", 
            "./images/TLK/4.png", "./images/TLK/5.png", "./images/TLK/6.png", 
            "./images/TLK/7.png", "./images/TLK/8.png", "./images/TLK/9.png", 
            "./images/TLK/10.png", "./images/TLK/11.png", "./images/TLK/12.png", 
            "./images/TLK/13.png", "./images/TLK/14.png"
        ],
        "mma": [
            "./images/MMA/1.png", "./images/MMA/2.png", "./images/MMA/3.png", 
            "./images/MMA/4.png", "./images/MMA/5.png", "./images/MMA/6.png", 
            "./images/MMA/7.png", "./images/MMA/8.png", "./images/MMA/9.png", 
            "./images/MMA/10.png", "./images/MMA/11.png", "./images/MMA/12.png", 
            "./images/MMA/13.png", "./images/MMA/14.png"
        ],
        "pokemon": [
            "./images/Pokemon/1.png", "./images/Pokemon/2.png", "./images/Pokemon/3.png", 
            "./images/Pokemon/4.png", "./images/Pokemon/5.png", "./images/Pokemon/6.png", 
            "./images/Pokemon/7.png", "./images/Pokemon/8.png", "./images/Pokemon/9.png", 
            "./images/Pokemon/10.png", "./images/Pokemon/11.png", "./images/Pokemon/12.png", 
            "./images/Pokemon/13.png", "./images/Pokemon/14.png"
        ],
        "simpson": [
            "./images/Simpson/1.png", "./images/Simpson/2.png", "./images/Simpson/3.png", 
            "./images/Simpson/4.png", "./images/Simpson/5.png", "./images/Simpson/6.png", 
            "./images/Simpson/7.png", "./images/Simpson/8.png", "./images/Simpson/9.png", 
            "./images/Simpson/10.png", "./images/Simpson/11.png", "./images/Simpson/12.png", 
            "./images/Simpson/13.png", "./images/Simpson/14.png"
        ],
        "wwe": [
            "./images/wwe/1.png", "./images/wwe/2.png", "./images/wwe/3.png", 
            "./images/wwe/4.png", "./images/wwe/5.png", "./images/wwe/6.png", 
            "./images/wwe/7.png", "./images/wwe/8.png", "./images/wwe/9.png", 
            "./images/wwe/10.png", "./images/wwe/11.png", "./images/wwe/12.png", 
            "./images/wwe/13.png", "./images/wwe/14.png"
        ],
        "l1": [
            "./images/L1/1.png", "./images/L1/2.png", "./images/L1/3.png", 
            "./images/L1/4.png", "./images/L1/5.png", "./images/L1/6.png", 
            "./images/L1/7.png", "./images/L1/8.png", "./images/L1/9.png", 
            "./images/L1/10.png", "./images/L1/11.png", "./images/L1/12.png", 
            "./images/L1/13.png", "./images/L1/14.png"
        ]
    };
    
    const imgFacesCartes = decks[selectedDeck] || decks["TLK"]; 

    let faces = [...imgFacesCartes, ...imgFacesCartes]; 
    faces = shuffleArray(faces); 

    let flippedCards = []; // Liste des cartes retournées
    let canFlip = true; // Empêche le retournement pendant une comparaison

    for (let i = 0; i < 28; i++) { 
        let cartes = document.createElement('div');
        cartes.classList.add('cartes');

        const imgDosCarte = document.createElement('img');
        switch (selectedDeck) {
            case "TLK":  
                imgDosCarte.src = "./images/dosdescartes/TLK.png";
                break;
            case "mma":  
                imgDosCarte.src = "./images/dosdescartes/mma.png";
                break;
            case "pokemon":  
                imgDosCarte.src = "./images/dosdescartes/pokemon.png";
                break;
            case "simpson":  
                imgDosCarte.src = "./images/dosdescartes/simpson.png";
                break;
            case "wwe":  
                imgDosCarte.src = "./images/dosdescartes/wwe.png";
                break;
            case "l1":  
                imgDosCarte.src = "./images/dosdescartes/l1.png";
                break;
        }
        cartes.appendChild(imgDosCarte);

        const imgFaceCarte = document.createElement('img');
        imgFaceCarte.src = faces[i]; 
        imgFaceCarte.style.display = "none"; 

        cartes.appendChild(imgFaceCarte);
        plateau.appendChild(cartes);

        cartes.addEventListener('click', function () {
            if (!canFlip || cartes.classList.contains('flipped')) return;

            imgFaceCarte.style.display = "block";
            imgDosCarte.style.display = "none";
            cartes.classList.add('flipped');

            flippedCards.push({ element: cartes, face: imgFaceCarte.src });

            if (flippedCards.length === 2) {
                canFlip = false; 
                setTimeout(compare, 1000); 
            }
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array;
    }

    function compare() {
        const [card1, card2] = flippedCards;

        if (card1.face === card2.face) {
            // Correspondance trouvée
            card1.element.style.pointerEvents = "none";
            card2.element.style.pointerEvents = "none";
        } else {
            // Pas de correspondance
            card1.element.querySelector('img:last-child').style.display = "none";
            card1.element.querySelector('img:first-child').style.display = "block";
            card1.element.classList.remove('flipped');

            card2.element.querySelector('img:last-child').style.display = "none";
            card2.element.querySelector('img:first-child').style.display = "block";
            card2.element.classList.remove('flipped');
        }

        flippedCards = [];
        canFlip = true;
    }















    
};
