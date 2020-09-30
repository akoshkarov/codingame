/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

let mountains;

// game loop
while (true) {
    mountains = [];

    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain.
        mountains.push(mountainH);
    }

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    let maxIndex = getHighestMauntain().maxIndex;
    print(maxIndex); // The index of the mountain to fire on.
}

function getHighestMauntain() {
    return mountains
        .reduce(({
            maxHeight,
            maxIndex
        }, height, index) => height > maxHeight ? {
            maxHeight: height,
            maxIndex: index
        } : {
            maxHeight,
            maxIndex
        }, {
            maxHeight: 0,
            maxIndex: 0
        })

    mountains
        .readline
}