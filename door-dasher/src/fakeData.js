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
    y: -73.98675836884865
}
const unionSquareCafe = {
    name: "Union Square Cafe",
    x: 40.737900247762695,
    y: -73.98776941328308
}
const namiNori = {
    name: "Nami Nori",
    x: 40.73516875725115,
    y: -74.00036506711312
}


export const restaurantList = [abikoCurry, unionSquareCafe, namiNori]
