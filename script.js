// Efek typing dark fantasy
const subtitle = document.querySelector(".subtitle");

const text = "Student Of TKJ0 • Dark Fantasy Theme";

let i = 0;

subtitle.innerHTML = "";

function typing() {

    if(i < text.length){

        subtitle.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 70);
    }
}

typing();


// Efek glow mengikuti mouse
document.addEventListener("mousemove", (e) => {

    const glow1 = document.querySelector(".glow1");
    const glow2 = document.querySelector(".glow2");

    glow1.style.left = e.pageX - 100 + "px";
    glow1.style.top = e.pageY - 100 + "px";

    glow2.style.right = e.pageX / 8 + "px";
    glow2.style.bottom = e.pageY / 8 + "px";
});


// Efek tombol
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {

    e.preventDefault();

    btn.innerHTML = "Welcome To The Darkness 🖤";

    btn.style.boxShadow = "0 0 30px #8b5cf6";
});


// Efek muncul saat website dibuka
const container = document.querySelector(".container");

window.addEventListener("load", () => {

    container.style.opacity = "1";
    container.style.transform = "translateY(0px)";
});