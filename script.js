const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00'; // Matrix green color
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, index) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, index * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }
        drops[index]++;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("nav");
    const header = document.querySelector("header");

    document.getElementById("current-year").textContent = new Date().getFullYear();
    setTimeout(() => {
        setInterval(drawMatrix, 50);
        navbar.style.backgroundColor = "rgba(0, 90, 30, 0.9)";
        header.style.opacity = "0.9";
    }, 30400); 
});


