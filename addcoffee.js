function addNewCoffee(input) {
    input.preventDefault(); // don't submit the form, we just want to update the data
    var coffeeAdded = {name: coffeeName2.value, roast: roast.value};
    var coffeesArr = [], roastsArr = [];

    coffees.forEach(function(coffee) {
        coffeesArr.push(coffee.name);
        roastsArr.push(coffee.roast);
    });

    if (!coffeesArr.includes(coffeeAdded.name)) {
        coffees.unshift(coffeeAdded);
    } else {
        var roastsSelectedArr = [];
        for (var i = 0; i < roastsArr.length; i++) {
            if (coffeesArr[i] === coffeeAdded.name) {
                roastsSelectedArr.push(roastsArr[i]);
            }
        }
        if (!roastsSelectedArr.includes(coffeeAdded.roast)) {
            coffees.unshift(coffeeAdded);
        }
    }
    tbody.innerHTML = renderCoffees(coffees);
}