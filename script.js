var cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        if (card.classList.contains("open")) {
            card.className = "card";
        }
        else {
            card.className = "card open";
        }
    })
});
