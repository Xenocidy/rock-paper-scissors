/**
 * It generates a random number between 0 and 2, and then returns the corresponding string value of the
 * number
 * @returns A random value between ‘Rock’, ‘Paper’ or ‘Scissors’.
 */
function computerPlay () {
    let random = Math.floor(Math.random() * 3);
    
    if (random == 0) {
        return 'Rock';
    } else if (random == 1) {
        return 'Paper';
    } else if (random == 2) {
        return 'Scissors';
    }
}
