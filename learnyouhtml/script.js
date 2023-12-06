const div = document.createElement("div");
div.id = "block";
document.body.appendChild(div);

function changePos() {
    const element = document.getElementById("block");
    const x = Math.random() * (window.innerWidth - div.clientWidth);
    const y = Math.random() * (window.innerHeight - div.clientHeight);

    element.style.transform = `translate(${x}px, ${y}px)`;
}

setInterval(changePos, 1000);
