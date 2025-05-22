function getRandomNumber() {
    return Math.trunc((Math.random() * 4) + 1)
}

function numberToColor(input) {
    switch (input) {
        case 1: return "red"
        case 2: return "green"
        case 3: return "blue"
        case 4: return "yellow"
        default: return null
    }
}