// Select all card elements
const cards = document.querySelectorAll("#card");
 
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const istatus = card.querySelector("h5");
    const btn = card.querySelector("#add");
    let flag = 0;

    btn.addEventListener("click", function () {
        if (card.dataset.flag === "0") {
            istatus.innerHTML = "Friends";
            istatus.style.color = "green";
            btn.innerHTML = "Remove Friend";
            btn.style.backgroundColor = "#dadada";
            btn.style.color = "#111";
            card.dataset.flag = "1"; // Update flag
        } else {
            istatus.innerHTML = "Stranger";
            istatus.style.color = "red";
            btn.innerHTML = "Add Friend";
            btn.style.backgroundColor = "cadetblue";
            btn.style.color = "#fff";
            card.dataset.flag = "0"; // Update flag
        }
    });
}

