/* const DOMSelectors = {
    button: document.getElementById('btn'),
    text: document.querySelector("#text"),
    box: document.getElementById("big-black-box"),
    points: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text){
    background.style.backgroundColor = 'red';
    text.innerHTML = "This is now a big red box";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);
DOMSelectors.name.addEventListener('submit' , function () {
    DOMSelectors
}) */



const DOMSelectors = {
    button: document.getElementById('btn'),
    input: document.querySelector("#input"),
    box: document.getElementById("container-box"),
};
/* const cat = "meow";
DOMSelectors.box.insertAdjacentHTML(`beforeend",'<h1>We are an ${cat}</h1>`); */

DOMSelectors.button.addEventListener("click", function() {
    let input = DOMSelectors.input.value; 
    DOMSelectors.box.insertAdjacentHTML("beforeend",`<p>${input}</p>`);
    DOMSelectors.input.value = "";
});