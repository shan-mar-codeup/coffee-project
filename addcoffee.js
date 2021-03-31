function addNewCoffee(input) {
    input.preventDefault(); // don't submit the form, we just want to update the data
    var coffeeAdded = {name: coffeeName2.value, roast: roast.value};
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffeeAdded.name.toLowerCase() === coffee.name.toLowerCase() && coffeeAdded.roast.toLowerCase() === coffee.roast.toLowerCase()) {
            // filteredCoffees.push(coffee);
            alert("This coffee is already in the list!")
        }
        else if (coffeeAdded.name.toLowerCase() !== coffee.name.toLowerCase()) {
            filteredCoffees.push(coffee);
            filteredCoffees.unshift(coffeeAdded);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}