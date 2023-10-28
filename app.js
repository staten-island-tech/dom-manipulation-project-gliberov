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

/* const cat = "meow";
DOMSelectors.box.insertAdjacentHTML(`beforeend",'<h1>We are an ${cat}</h1>`); */


/* DOMSelectors.button.addEventListener("click", function() {
    let input = DOMSelectors.input.value; 
    DOMSelectors.box.insertAdjacentHTML("beforeend",`<p>${input}</p>`);
    DOMSelectors.input.value = "";
}); */

const DOMSelectors = {
    form: document.querySelector("#form"),
    name: document.querySelector("#name"),
    map: document.querySelector("#map"),
    cool: document.querySelector("#cool"),
    box: document.querySelector('#countries'),
};

function create() {
    const country = {
    name: DOMSelectors.name.value,
    map: DOMSelectors.map.value,
    cool: DOMSelectors.cool.value
    }
    inject(country)
    clear()
}

DOMSelectors.form.addEventListener('submit', function(event) {
    event.preventDefault();
    create();
})

function inject(){
    DOMSelectors.box.insertAdjacentHTML("afterbegin",`<div class="card">
    <h2>${DOMSelectors.name.value}</h2>
    <img src="${DOMSelectors.map.value}">
    <p>${DOMSelectors.cool.value}</p>
    <button class="remove">Remove Button</button>
    </div>
    `)
    const countryobj = DOMSelectors.box.querySelector('.card');
    remove(countryobj)
}

function clear(){
    DOMSelectors.name.value = ''
    DOMSelectors.map.value = ''
    DOMSelectors.cool.value = ''
}

function remove(countryobj){
    const button = countryobj.querySelector('.remove')
    button.addEventListener('click', function(event) {
        countryobj.remove()
    });
}


