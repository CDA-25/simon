function getRandomColor() {
    let numberColor = Math.trunc((Math.random() * 4 ) + 1)
    switch (numberColor) {
        case (1): {
            return "red"
        } case (2): {
            return "green"
        } case (3): {
            return "blue"
        } case (4): {
            return "yellow"
        }
    }
}
getRandomColor