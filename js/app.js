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

function City() {

}

function Feedback() {

}

function Validate() {
    
}

/* App */
function App() {
    switch (body) {
        case "index" :

            break;
        default : 

            break;
    }
}

App();

