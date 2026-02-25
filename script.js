let cards = document.querySelectorAll(".card");
let isFriends = false;
cards.forEach((card) => {
    console.log();
    card.childNodes[5].addEventListener("click", () => {
        if (!isFriends) {
            isFriends = true;
            card.childNodes[3].childNodes[5].textContent = "friends";

            card.childNodes[5].classList.add("following");
            card.childNodes[5].textContent = "Following";
        } else {
            isFriends = false;
            card.childNodes[3].childNodes[5].textContent = "Stranger";
            card.childNodes[5].classList.remove("following");
            card.childNodes[5].textContent = "Follow";
        }
    });
});