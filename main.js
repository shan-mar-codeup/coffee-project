"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee" id=">';
    html += coffee.id + '"><h5>' + coffee.name + '</h5>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var coffeeInput = coffeeName.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (selectedRoast === "all" && coffeeInput === "") {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === coffee.roast && coffeeInput.toLowerCase() === coffee.name.toLowerCase()) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === coffee.roast && coffeeInput === "") {
            filteredCoffees.push(coffee);
        } else if (coffeeInput.toLowerCase() === coffee.name.toLowerCase()) {
            filteredCoffees.push(coffee);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}


function displayCoffeeByName() {
    var coffeeInput = coffeeName.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(coffeeInput.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function displayCoffeeByRoast() {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === coffee.roast) {
            filteredCoffees.push(coffee);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addNewCoffee(input) {
    input.preventDefault(); // don't submit the form, we just want to update the data
    var coffeeAdded = {name: coffeeName2.value, roast: roast.value};

    coffees.unshift(coffeeAdded);
    coffees.slice(1).forEach(function(coffee) {
        if (coffeeAdded.name.toLowerCase() === coffee.name.toLowerCase() && coffeeAdded.roast.toLowerCase() === coffee.roast.toLowerCase()) {
            coffees.shift(coffeeAdded);
        }
    });

    tbody.innerHTML = renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#submit2');
var roastSelection = document.querySelector('#roast-selection');
var coffeeName = document.querySelector('#coffee-name');
var coffeeName2 = document.querySelector('#name');
var roast = document.querySelector('#roast');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', addNewCoffee);
coffeeName.addEventListener("input", displayCoffeeByName);
roastSelection.addEventListener("change", displayCoffeeByRoast);

