// GAME DATA
const games = {
    "cod7": {
        name: "Call of Duty Black Ops 7",
        image: "gimg/1.png"
    },
    "rdr2": {
        name: "Red Dead Redemption 2",
        image: "img/red dead card.png"
    },
    "7days_die": {
        name: "7 Days to Die",
        image: "img/7days.jpg"
    },
    "gtav": {
        name: "GTA V",
        image: "img/Grand Theft Auto V.jpg"
    },
    // "geoguesser": {
    //     name: "geoguesser",
    //     image: "img/geoguesser card.png"
    // },
    // "asphalt": {
    //     // name: "asphalt",
    //     image: "img/asphalt card.png"
    // },
    "crossfire_sierra": {
        name: "crossfire sierra",
        image: "img/cross.jpg"
    },
    // "delta_force": {
    //     name: "delta_force",
    //     image: "img/delta card.png"
    // },
    "gates_nowhere": {
        name: "gates nowhere",
        image: "img/gates.jpg"
    },
    "itr2": {
        name: "INTO THE RADIUS 2",
        image: "img/into.png"
    },
    "itt": {
        name: "IT TAKES 2",
        image: "img/It Takes Two.jpg"
    },
    "dod_game": {
        name: "THE SPOTTER DIG OR DIE",
        image: "img/spotter.png"
    },
    // "wwm": {
    //     name: "wwm",
    //     image: "img/"
    // },
    "windrose_01": {
        name: "windrose_01",
        image: "img/windrose.jpg"
    },
    "re4_remake": {
        name: "Resident Evil 4 Remake",
        image: "img/res.jpg"
    },
    "repo_game": {
        name: "R-E-P-O",
        image: "img/repo.jpg"
    }
};
// CHECK OWNED
function isOwned(id) {
    return localStorage.getItem(id) === "true";
}
// BUY GAME
function buyGame(id) {
    localStorage.setItem(id, "true");
    updateButton(id);
}
// UPDATE BUTTON
function updateButton(id) {
    let btn = document.getElementById("buyBtn");
    if (!btn) return;

    if (isOwned(id)) {
        btn.innerText = "In Library";
        btn.style.background = "gray";
        btn.style.cursor = "default";
        btn.onclick = null;
    } else {
        btn.innerText = "Buy";
        btn.onclick = () => buyGame(id);
    }
}
// LOAD LIBRARY
function loadLibrary() {
    let container = document.getElementById("libraryGames");
    if (!container) return;
    for (let id in games) {
        if (isOwned(id)) {
            let game = games[id];

            let div = document.createElement("div");
            div.classList.add("game-card");

            div.innerHTML = `
                <img src="${game.image}" class="photo">
                <p class="font">${game.name}</p> 
                `;

            container.appendChild(div);
        }
    }
}
// AUTO RUN
window.onload = function () {

    let btn = document.getElementById("buyBtn");
    if (btn) {
        let gameId = btn.getAttribute("data-id");
        updateButton(gameId);
    }

    loadLibrary();
}; 