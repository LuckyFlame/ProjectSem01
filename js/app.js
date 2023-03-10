let body = document.body.id;

/* Scroll To Top */

let buttonScroll = document.getElementById("scrollToTop");

window.onscroll = function() {
    scrollTop()
};

function scrollTop() {
    if(document.body.ScrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonScroll.style.display = "block";
    } else {
        buttonScroll.style.display = "none";
    }
}

buttonScroll.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/* Other */

// function Validate() {
    
// }

function Leaflet() {
    let map = L.map("map");

    map.setView([10.786853030381092, 106.66624381783144], 14);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="">FPT Aptech College</a>'

    }).addTo(map);

    L.marker([10.786853030381092, 106.66624381783144]).addTo(map)
    .bindPopup("FPT Aptech International Training Institute").openPopup();
}

/* App */
function App() {
    switch (body) {
        case "feedback" :
            Leaflet();
            Validate();
            break;
        default : 

            break;
    }
}

App();

