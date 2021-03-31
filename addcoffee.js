function addNewCoffee() {
    var coffeeAdded = {};
    coffeeAdded.name = coffeeName2.value;
    coffeeAdded.roast = roast.value;
    var filteredCoffees = coffees;

    for (var i = 0; i < coffees.length; i++) {
        if (filteredCoffees[i].name === coffeeAdded.name && filteredCoffees[i] === coffeeAdded.roast) {
            // break;
        }
        filteredCoffees.unshift(coffeeAdded);
    }

    tbody.innerHTML = renderCoffees(filteredCoffees);
}