const becky = {
    name: "Becky",
    email: "becky@gmail.com",
    password: "1111",
    friends: []
}
const sharon = {
    name: "Sharon",
    email: "sharon@gmail.com",
    password:"1111",
    friends:[{becky}]
}
const lisa = {
    name: "Lisa", 
}

export const users = [becky, sharon, lisa]

const abikoCurry = {
    name: "Abiko Curry",
    x: 40.753355024966176,
    y: -73.98675836884865,
    review: "Best curry place! You can adjust the spicy levels! "
}
const unionSquareCafe = {
    name: "Union Square Cafe",
    x: 40.737900247762695,
    y: -73.98776941328308,
    review: "Recommend their rigatoni bolognese "
}
const namiNori = {
    name: "Nami Nori",
    x: 40.73516875725115,
    y: -74.00036506711312,
    review: "Known for their sushi taco style. Quick and decent price."
}
const sakaMai = {
    name: "SakaMai",
    x: 40.72119793105729,
    y: -73.98787263889123,
    review: "Place for uni lovers. I recommend their 'Egg on Egg on Egg' and their 'Uni mazemen'. "
}

export const restaurantList = [abikoCurry, unionSquareCafe, namiNori, sakaMai]
