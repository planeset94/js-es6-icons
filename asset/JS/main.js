// Milestone 1:
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

let animals = [
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
let animalEl = document.getElementById('square');

animals.forEach(animal => {
    animalEl.insertAdjacentHTML('beforeend', `

<div class="animal_card"> 

<i id="" class="fas fa-${animal.name}" style="color:${colorFunction()}"></i>
<p class="animal_name" >${animal.name}</p>

</div>

`);

});

function colorFunction() {
    let colore;
    animals.forEach(animal => {
        if (animal.type === 'animal') {
            colore = "#0600ff";
        } else if (animal.type === 'user') {
            colore = "#800080";
        } else {
            colore = "#ffa500";
        };



    });
    return colore;

};