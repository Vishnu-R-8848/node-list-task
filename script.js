let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.childNodes[5].addEventListener("click", () => {
        if (card.childNodes[3].childNodes[5].textContent === "Stranger") {
            card.childNodes[3].childNodes[5].textContent = "friends";
            card.childNodes[5].classList.add("following");
            card.childNodes[5].textContent = "Following";
        } else {
            card.childNodes[3].childNodes[5].textContent = "Stranger";
            card.childNodes[5].classList.remove("following");
            card.childNodes[5].textContent = "Follow";
        }
    });
});
