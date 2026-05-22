// Efek ketik otomatis
const text = "Welcome to my aesthetic website ✨";
const typingText = document.querySelector("p");

let index = 0;

function typingEffect() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 60);
    }
}

// Reset teks sebelum animasi dimulai
typingText.innerHTML = "";
typingEffect();


// Efek klik tombol
const button = document.querySelector(".btn");

button.addEventListener("click", function(e) {
    e.preventDefault();

    button.innerHTML = "Loading...";

    setTimeout(() => {
        button.innerHTML = "Welcome Radhitya 🚀";
    }, 1500);
});


// Efek gerakan mouse pada card
const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});


// Mengembalikan posisi card saat mouse keluar
document.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
});