var ctx, w, h;
var dots = [];
var hs = ["#4CF", "#F54"];
var s = 280;
var c = 2;
var r = [0, 0];

window.onload = function() {
    var canv = document.createElement("canvas");
    document.body.appendChild(canv)
    canv.width = w = window.innerWidth;
    canv.height = h = window.innerHeight;
    ctx = canv.getContext("2d");
    
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 1.1;
    ctx.font = "20px monospace";
    ctx.textAlign = "center";
    window.requestAnimationFrame(main);
}

function main() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);
    
    for (var i = 0; i < c; i++) {
        dots.push(new Dot(Math.floor(Math.random() * (s + 1)), Math.floor(Math.random() * (s + 1))));
        (dots[dots.length - 1].h == hs[0]) ? (r[0] += 1) : (r[1] += 1);
    }
    
    for (var i = 0; i < dots.length; i++) {
        dots[i].render();
    }
    
    ctx.beginPath();
    ctx.arc(w / 2, 50 + s / 2, s / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.strokeRect(w / 2 - s / 2, 50, s, s);
    
    ctx.fillStyle = "#FFF";
    ctx.fillText("Pi ≈ " + (4 * r[0] / (r[0] + r[1])).toFixed(8), w / 2, 100 + s);
    
    window.requestAnimationFrame(main);
}

class Dot {
    constructor(x, y) {
        this.x = x + (w - s) / 2;
        this.y = y + 50;
        this.h = (Math.sqrt(Math.pow(this.x - w / 2, 2) + Math.pow(this.y - (50 + s / 2), 2)) <= s / 2) ? (hs[0]) : (hs[1]);
    }
    
    render() {
        ctx.fillStyle = this.h;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
        ctx.fill();
    }
}