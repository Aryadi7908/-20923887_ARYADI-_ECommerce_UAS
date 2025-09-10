// ================= Chat Box Maintance =================
document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");

    // Daftar tombol yang munculin chatBox
    const menuMaintance = [
        "informasi", "store-locator", "pembelian-grosir", "servis-penjahitan",
        "gift-delivery", "live-station", "faq", "panduan-belanja",
        "kebijakan-retur", "kebijakan-privasi", "facebook", "twitter",
        "instagram", "youtube"
    ];

    menuMaintance.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                chatBox.style.display = "block";
            });
        }
    });

    closeChat.addEventListener("click", function () {
        chatBox.style.display = "none";
    });
});

// ================= Chat Box Stock =================
document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chatBox-stock");
    const closeChatStock = document.getElementById("closeChat-stock");

    const stockItems = [
        "kemejaOverSizeCasual", "gamis", "koko", "tunik", "hijab",
        "trendF1", "trendF2", "trendF3", "trendF4", "trendF5", "trendF6"
    ];

    stockItems.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                chatBox.style.display = "block";
            });
        }
    });

    closeChatStock.addEventListener("click", function () {
        chatBox.style.display = "none";
    });
});

// ================= Chat Box Event =================
document.addEventListener("DOMContentLoaded", function () {
    const fweek = document.getElementById("fashionWeek");
    const chatBox = document.getElementById("chatBox-event");
    const closeChatEvent = document.getElementById("closeChat-event");

    if (fweek) {
        fweek.addEventListener("click", function (e) {
            e.preventDefault();
            chatBox.style.display = "block";
        });
    }

    closeChatEvent.addEventListener("click", function () {
        chatBox.style.display = "none";
    });
});

// ================= Promo Carousel =================
const promoTrack = document.querySelector('.promo-track');
const promoSlides = Array.from(promoTrack.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsNav = document.querySelector('.dots');

let currentPromo = 0;

// Buat dots
promoSlides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);

function updatePromo(index) {
    promoTrack.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentPromo = index;
}

nextBtn.addEventListener('click', () => {
    updatePromo((currentPromo + 1) % promoSlides.length);
});

prevBtn.addEventListener('click', () => {
    updatePromo((currentPromo - 1 + promoSlides.length) % promoSlides.length);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => updatePromo(i));
});

// Auto play
setInterval(() => {
    updatePromo((currentPromo + 1) % promoSlides.length);
}, 8000);

// ================= Carousel Best Seller =================
const carousel = document.querySelector('.carousel');
const prevBtnBsell = document.querySelector('.prev-best-sell');
const nextBtnBsell = document.querySelector('.next-best-sell');

nextBtnBsell.addEventListener('click', () => {
    carousel.scrollBy({ left: 240, behavior: 'smooth' });
});

prevBtnBsell.addEventListener('click', () => {
    carousel.scrollBy({ left: -240, behavior: 'smooth' });
});


