let cages = [];

var N = parseInt(readline());
var Y = parseInt(readline());
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var S = parseInt(inputs[0]);
    var H = parseInt(inputs[1]);
    var A = parseInt(inputs[2]);
    cages.push({
        S,
        H,
        A
    });
}

let amount;

while (Y !== 0) {
    cages = cages
        .map(({
            S,
            H,
            A
        }) => {
            let updA = Math.max(0, A - S);
            let updS = Math.min(S * 2, updA);
            let updH = Math.max(0, updA - updS);
            return {
                S: updS,
                H: updH,
                A: updA
            };
        });
    amount = getAmount();
    console.log(amount);
    if (amount === 0) {
        break;
    }
    Y--;
}

function getAmount() {
    return cages
        .reduce((acc, {
            A
        }) => acc + A, 0)
}