var likeCountNeil = 3;
var likeCountNichole = 12;
var likeCountJim = 9;

var neilCountElement = document.querySelector("#neilCount");
var nicholeCountElement = document.querySelector("#nicholeCount");
var jimCountElement = document.querySelector("#jimCount");

function add1Neil() {
    likeCountNeil ++;
    neilCountElement.innerText = likeCountNeil + " like(s)";
}
function add1Nichole() {
    likeCountNichole ++;
    nicholeCountElement.innerText = likeCountNichole + " like(s)";
}
function add1Jim() {
    likeCountJim ++;
    jimCountElement.innerText = likeCountJim + " like(s)";
}