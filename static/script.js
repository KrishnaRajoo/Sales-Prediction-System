// ============================
// INPUTS
// ============================

const tvInput = document.getElementById("tv");
const radioInput = document.getElementById("radio");
const newspaperInput = document.getElementById("newspaper");

// ============================
// PROGRESS BARS
// ============================

const tvBar = document.getElementById("tvBar");
const radioBar = document.getElementById("radioBar");
const newsBar = document.getElementById("newsBar");

// ============================
// PERCENTAGES
// ============================

const tvPercent = document.getElementById("tvPercent");
const radioPercent = document.getElementById("radioPercent");
const newsPercent = document.getElementById("newsPercent");

// ============================
// SUMMARY VALUES
// ============================

const summaryTV = document.getElementById("summaryTV");
const summaryRadio = document.getElementById("summaryRadio");
const summaryNews = document.getElementById("summaryNews");

function updateDashboard(){

    const tv = Number(tvInput.value) || 0;
    const radio = Number(radioInput.value) || 0;
    const news = Number(newspaperInput.value) || 0;

    const total = tv + radio + news;

    summaryTV.textContent = "₹ " + tv.toFixed(2);
    summaryRadio.textContent = "₹ " + radio.toFixed(2);
    summaryNews.textContent = "₹ " + news.toFixed(2);

    if(total === 0){

        tvBar.style.width = "0%";
        radioBar.style.width = "0%";
        newsBar.style.width = "0%";

        tvPercent.textContent = "0%";
        radioPercent.textContent = "0%";
        newsPercent.textContent = "0%";

        return;
    }

    const tvP = (tv / total) * 100;
    const radioP = (radio / total) * 100;
    const newsP = (news / total) * 100;

    animateBar(tvBar, tvP);

    animateBar(radioBar, radioP);

    animateBar(newsBar, newsP);

    tvPercent.textContent = tvP.toFixed(1) + "%";
    radioPercent.textContent = radioP.toFixed(1) + "%";
    newsPercent.textContent = newsP.toFixed(1) + "%";

}
tvInput.addEventListener("input", updateDashboard);

radioInput.addEventListener("input", updateDashboard);

newspaperInput.addEventListener("input", updateDashboard);

const form = document.querySelector("form");

const button = document.querySelector(".predict-btn");

form.addEventListener("submit", () => {

    button.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Predicting...';

    button.disabled = true;

});

const cards = document.querySelectorAll(".kpi-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

function animateBar(bar,target){

    let width=0;

    const interval=setInterval(()=>{

        if(width>=target){

            clearInterval(interval);

        }else{

            width++;

            bar.style.width=width+"%";

        }

    },8);

}

updateDashboard();
