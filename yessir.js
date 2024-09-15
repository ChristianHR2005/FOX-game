let letters = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
];

let row = 0;
let col = 0;

function gamble() {
    let randnum = Math.floor(Math.random() * 3) + 1;
    letters[row+1][col+1] = randnum;
    visuals();
    if(check()) {
       document.getElementById("header1-1").textContent = "fart";
    }
}

function check() {
    if (letters[row][col] == 1 && letters[row][col + 1] == 2 && letters[row][col + 2] == 3) {
        return true;
    }
    
    // Horizontal (right to left)
    if (letters[row][col] == 3 && letters[row][col - 1] == 2 && letters[row][col - 2] == 1) {
        return true;
    }
    
    // Vertical (top to bottom)
    if (letters[row][col] == 1 && letters[row + 1][col] == 2 && letters[row + 2][col] == 3) {
        return true;
    }
    
    // Vertical (bottom to top)
    if (letters[row][col] == 3 && letters[row - 1][col] == 2 && letters[row - 2][col] == 1) {
        return true;
    }
    
    // Diagonal (top-left to bottom-right)
    if (letters[row][col] == 1 && letters[row + 1][col + 1] == 2 && letters[row + 2][col + 2] == 3) {
        return true;
    }
    
    // Diagonal (bottom-right to top-left)
    if (letters[row][col] == 3 && letters[row - 1][col - 1] == 2 && letters[row - 2][col - 2] == 1) {
        return true;
    }
    
    // Diagonal (top-right to bottom-left)
    if (letters[row][col] == 1 && letters[row + 1][col - 1] == 2 && letters[row + 2][col - 2] == 3) {
        return true;
    }
    
    // Diagonal (bottom-left to top-right)
    if (letters[row][col] == 3 && letters[row - 1][col + 1] == 2 && letters[row - 2][col + 2] == 1) {
        return true;
    }

    // If no match is found
    return false;
}

function visuals() {
    for(let i = 0;i<5; i++) {
        for(let j = 0;j<5;j++) {
            let thID = 'header' + i + '-' + j;
            let thElement = document.getElementById(thID);
            thElement.textContent="bob"
        }
    }
}
