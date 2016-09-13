const container = document.getElementById("fifty-shades");
const num = 50;
for (var i = 0; i < num; i++) {
    let r = Math.floor(256/(num)) * i;
    let g = Math.floor(256/(num)) * i;
    let b = Math.floor(256/(num)) * i;
    let color = "rgb(" + r + "," + g + "," + b + ")";
    let el = document.createElement("div");
    el.className = "shade";
    el.style.backgroundColor = color;
    container.appendChild(el);
}
