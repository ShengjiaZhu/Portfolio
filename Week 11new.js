//resize
const svg = document.getElementById("svg_canvas");

window.addEventListener("resize", resizeSvg);

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
    
    for(let circle of svg.children){
        circle.setAttribute('r',  Math.min(bbox.width, bbox.height) * 0.1);
    }
}

//Adding random color into svg1
function randomColor() {
    var color = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ')';
    return color;
}

// Apply random color
var circle1 = document.getElementById('circle1');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');
var circle4 = document.getElementById('circle4');
var circle5 = document.getElementById('circle5');

circle1.setAttribute('fill', randomColor());
circle2.setAttribute('fill', randomColor());
circle3.setAttribute('fill', randomColor());
circle4.setAttribute('fill', randomColor());
circle5.setAttribute('fill', randomColor());