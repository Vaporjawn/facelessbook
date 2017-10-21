{

let selfStyleEl = document.querySelector("style#fbless") || (el => {
  el.id = "fbless";
  document.head.appendChild(el);
  return el;
})(document.createElement("style"));

let selfStyle = selfStyleEl.sheet;

let knownElements = new Set();

function extractID(path) {
  return new URLSearchParams(path.substr(1+path.indexOf("?"))).get('id')
}

function getCurrrentDOM_Elements() {
  return Array.prototype.filter.call(document.querySelectorAll('[data-hovercard]'),el=>/^\/ajax\/hovercard\/(user|hovercard|group|page)\.php/.test(el.dataset.hovercard));
}


function genColor(seed) {
  let color = Math.floor((Math.abs(Math.sin(seed) * 16777215)) % 16777215).toString(16);
  // pad any colors shorter than 6 characters with leading 0s
  while(color.length < 6) {
      color = '0' + color;
  }
  return color;
}

// new Set(Array.prototype.filter.call(document.querySelectorAll('[data-hovercard]'),el=>/^\/ajax\/hovercard\/(user|hovercard|group)\.php/.test(el.dataset.hovercard)).map(el=>new URLSearchParams(el.dataset.hovercard.substr(1+el.dataset.hovercard.indexOf("?"))).get('id')))

var dict = {};

let entityMap = new Map();

function updateKnownElements() {
  return getCurrrentDOM_Elements().map(el=>knownElements.add(el));
}

updateKnownElements();

knownElements.forEach(el => {
  let img;
  el.style.background = `#${genColor(extractID(el.dataset.hovercard))}`;
  el.style.color = "transparent";
  el.style.borderRadius = "1em"
  // console.log(genColor(extractID(el.dataset.hovercard)));
  if(img = el.querySelector("img")) {
    img.style.opacity = "0";
  }
  window.aaa = el;
});


console.log("yes")

}


// var COLORS = [];
// while (COLORS.length < 100) {
//     COLORS.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
// }

// // random number generator
// function rand(frm, to) {
//     return ~~(Math.random() * (to - frm)) + frm;
// }