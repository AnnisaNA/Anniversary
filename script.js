/* ==========================================
   A SKY FULL OF US
   Happy 4th Anniversary
========================================== */

const opening = document.getElementById("opening");
const envelopeSection = document.getElementById("envelopeSection");
const letterSection = document.getElementById("letterSection");
const giftSection = document.getElementById("giftSection");
const voucherSection = document.getElementById("voucherSection");
const gallerySection = document.getElementById("gallerySection");
const closingSection = document.getElementById("closingSection");
const secretSection = document.getElementById("secretSection");

const startButton = document.getElementById("startButton");
const envelope = document.getElementById("envelope");
const giftButton = document.getElementById("giftButton");
const nextGallery = document.getElementById("nextGallery");
const closingButton = document.getElementById("closingButton");
const loveButton = document.getElementById("loveButton");
const finishButton = document.getElementById("finishButton");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

const voucherImage = document.getElementById("voucherImage");
const downloadVoucher = document.getElementById("downloadVoucher");

let musicPlaying = false;

/* ==========================================
MUSIC
========================================== */

musicBtn.addEventListener("click",()=>{

if(musicPlaying){

bgMusic.pause();

musicPlaying=false;

musicBtn.innerHTML='<i class="fa-solid fa-music"></i>';

}else{

bgMusic.play();

musicPlaying=true;

musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

});

/* ==========================================
OPEN WEBSITE
========================================== */

startButton.addEventListener("click",()=>{

opening.classList.add("hidden");

envelopeSection.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

if(!musicPlaying){

bgMusic.play();

musicPlaying=true;

musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

});

/* ==========================================
OPEN ENVELOPE
========================================== */

envelope.addEventListener("click",()=>{

envelope.classList.add("open");

setTimeout(()=>{

envelopeSection.classList.add("hidden");

letterSection.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

},1000);

});

/* ==========================================
LETTER
========================================== */

giftButton.addEventListener("click",()=>{

letterSection.classList.add("hidden");

giftSection.classList.remove("hidden");

setTimeout(()=>{

giftSection.classList.add("hidden");

voucherSection.classList.remove("hidden");

document.querySelector(".voucher-preview").classList.add("show");

window.scrollTo({

top:0,

behavior:"smooth"

});

},1800);

});

/* ==========================================
   DOWNLOAD VOUCHER
========================================== */

downloadVoucher.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = "images/voucher.png";

    link.download = "Voucher-Anniversary-Icha-Untuk-Mas.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    popup.classList.remove("hidden");

    popupText.innerHTML = `
    🎉 Voucher berhasil diunduh.<br><br>
    Semoga Mas suka ya 🤍
    `;

});

/* ==========================================
CLOSE POPUP
========================================== */

closePopup.addEventListener("click", () => {

    popup.classList.add("hidden");

});

/* ==========================================
NEXT TO GALLERY
========================================== */

nextGallery.addEventListener("click", () => {

    voucherSection.classList.add("hidden");

    gallerySection.classList.remove("hidden");

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
NEXT TO CLOSING
========================================== */

closingButton.addEventListener("click", () => {

    gallerySection.classList.add("hidden");

    closingSection.classList.remove("hidden");

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
LOVE BUTTON
========================================== */

loveButton.addEventListener("click", () => {

    createHeartRain();

    if (typeof confetti === "function") {

        confetti({

            particleCount: 180,

            spread: 90,

            origin: {

                y: 0.65

            }

        });

    }

    setTimeout(() => {

        closingSection.classList.add("hidden");

        secretSection.classList.remove("hidden");

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }, 1800);

});

/* ==========================================
FINISH BUTTON
========================================== */

finishButton.addEventListener("click", () => {

    Swal.fire({

        title: "🤍",

        html: `
        <b>Terima kasih, Mas.</b><br><br>

        Semoga hadiah kecil dari Icha ini
        bisa menjadi kenangan indah
        di Anniversary kita yang ke-4.<br><br>

        Icha sayang Mas ❤️
        `,

        confirmButtonText: "Peluk Icha 🤍",

        confirmButtonColor: "#4facfe"

    });

});

/* ==========================================
   HEART RAIN
========================================== */

function createHeartRain() {

    const container = document.getElementById("heartContainer");

    for (let i = 0; i < 80; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = Math.random() > 0.5 ? "🤍" : "💙";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

        heart.style.fontSize = (18 + Math.random() * 22) + "px";

        heart.style.opacity = Math.random();

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 7000);

    }

}

/* ==========================================
   GENERATE STARS
========================================== */

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 5 + "s";

    stars.appendChild(star);

}

/* ==========================================
   COUNTDOWN
========================================== */

const countdown = document.getElementById("countdown");

const targetDate = new Date("July 21, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        countdown.innerHTML = "💙 Happy Anniversary 💙";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =

        `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

}

updateCountdown();

setInterval(updateCountdown,1000);

/* ==========================================
   TAB TITLE
========================================== */

const originalTitle = document.title;

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title = "🥺 Jangan lama-lama ya Mas...";

    } else {

        document.title = "🤍 Makasih udah balik.";

        setTimeout(() => {

            document.title = originalTitle;

        },2000);

    }

});

/* ==========================================
   BODY LOADED
========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/* ==========================================
   EASTER EGG
========================================== */

let loveClick = 0;

loveButton.addEventListener("click", () => {

    loveClick++;

    if (loveClick >= 5) {

        setTimeout(() => {

            Swal.fire({

                title: "🤫 Pesan Rahasia",

                html: `
                <b>Selamat Mas ❤️</b><br><br>

                Mas berhasil menemukan
                pesan rahasia dari Icha.<br><br>

                Terima kasih sudah membuka
                website ini sampai akhir.<br><br>

                Semoga setiap tanggal
                <b>21 Juli</b> nanti,
                kita masih bisa merayakannya
                bersama.<br><br>

                <b>Icha sayang Mas 🤍</b>
                `,

                confirmButtonText: "❤️",

                confirmButtonColor: "#4facfe"

            });

        },2000);

    }

});

/* ==========================================
   BUTTON CLICK EFFECT
========================================== */

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",()=>{

        button.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(.95)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:180

        });

    });

});

/* ==========================================
   SAFE IMAGE CHECK
========================================== */

voucherImage.addEventListener("error",()=>{

    voucherImage.src="https://placehold.co/700x450/8ecfff/ffffff?text=Voucher+Belum+Ditambahkan";

});

/* ==========================================
   SMOOTH APPEAR
========================================== */

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade-in");

});

/* ==========================================
   KEYBOARD SHORTCUT
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="m" || e.key==="M"){

        if(musicPlaying){

            bgMusic.pause();

            musicPlaying=false;

            musicBtn.innerHTML='<i class="fa-solid fa-music"></i>';

        }else{

            bgMusic.play();

            musicPlaying=true;

            musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

        }

    }

});

/* ==========================================
   AUTO SCROLL TOP
========================================== */

function scrollTopSmooth(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* ==========================================
   PREVENT DOUBLE CLICK
========================================== */

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("dblclick",(e)=>{

        e.preventDefault();

    });

});

/* ==========================================
   FINISH
========================================== */

console.log("%c💙 A Sky Full of Us",
"font-size:24px;color:#4facfe;font-weight:bold;");

console.log("%cWebsite dibuat khusus oleh Icha untuk Mas Roniyansyah ❤️",
"font-size:14px;color:#2563eb;");