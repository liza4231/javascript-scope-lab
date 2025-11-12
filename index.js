const burgers = [
    "Hamburger", "Cheeseburger"
]

let featuredDrink = 'Strawberry Milkshake';


function addBurger(burger) {
    const newBurger = "Flatburger";
    return burgers.push(newBurger);
}



if(true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}


function changeFeaturedDrink() {
    featuredDrink = "The JavaShake";
    return console.log(featuredDrink);
}

