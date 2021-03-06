// Milestone 1:
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

let items = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',


    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    }
];
let squareEl = document.getElementById('square');
let selectEl = document.getElementById('typology');


let colore;


items.forEach(el => {
    var { type } = el;
    console.log(type);
    if (type == "animal") {
        colore = "#0600ff";
    } else if (type == "user") {
        colore = "#800080";
    } else if (type == "vegetable") {
        colore = "#ffa500";
    };



    squareEl.insertAdjacentHTML('beforeend', `

        <div id="cartella" class="el_card" data-type=${el.type}> 

        <i id="" class="fas fa-${el.name}" style="color:${colore}"></i>
        <p class="el_name" >${el.name}</p>

        </div>

        `);


});

let cardEl = document.querySelectorAll('.el_card');
selectEl.addEventListener('change', () => {
    cardEl.forEach((card) => {
        if (selectEl.value == "All") {
            card.style.display = "block";
        } else if (card.getAttribute('data-type') == selectEl.value) {
            // console.log('visibile');
            card.style.display = "block";
        } else {
            console.log('not-visible');
            card.style.display = "none";
        };
    });

});