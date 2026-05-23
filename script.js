// PARALLAX

document.addEventListener('mousemove', (e)=>{

    const x =
    (window.innerWidth / 2 - e.pageX) / 40;

    const y =
    (window.innerHeight / 2 - e.pageY) / 40;

    document.querySelector('.hero-right')
    .style.transform =
    `translate(${x}px, ${y}px)`;

});



// PROGRESS BAR

window.addEventListener('scroll', ()=>{

    const scroll =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrolled =
    (scroll / height) * 100;

    document.getElementById('progress-bar')
    .style.width = scrolled + '%';

});



// RANDOM GLITCH

setInterval(()=>{

    document.querySelector('.glitch1')
    .style.opacity = Math.random();

    document.querySelector('.glitch2')
    .style.opacity = Math.random();

},120);



// RED BLUR FOLLOW

document.addEventListener('mousemove', (e)=>{

    let x = e.clientX / 8;
    let y = e.clientY / 8;

    document.querySelector('.red-blur')
    .style.transform =
    `translate(${x}px, ${y}px)`;

});


const cursorGlow = document.createElement("div");
document.body.appendChild(cursorGlow);

cursorGlow.style.cssText = `
position: fixed;
width: 20px;
height: 20px;
border-radius: 50%;
background: rgba(255,0,0,0.4);
pointer-events: none;
transform: translate(-50%, -50%);
z-index: 9999;
filter: blur(10px);
`;

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

const reveal = document.querySelectorAll(
".skill-card, .hero-text, .spiderman-img"
);

window.addEventListener("scroll", () => {

    reveal.forEach((el) => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            el.classList.add("active");
        }

    });

});