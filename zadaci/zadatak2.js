// За унета 3 броја, исписати највећи / најмањи

let x = 7
let y = 3
let z = 15

if (x > y && x > z) {
    console.log('X je najveci broj =', x)
} else if (y > x && y > z) {
    console.log('Y je najveci broj =', y)
} else if (z > y && z > x) {
    console.log('Z je najveci broj =', z)
}

// Najmanji broj 

if (x < y && x < z) {
    console.log('X je najmanji broj =', x)
} else if (y < x && y < z) {
    console.log('Y je najmanji broj =', y)
} else if (z < y && z < x) {
    console.log('Z je najmanji broj =', z)
}
// 2. Написати програм који рачуна обиме курга, правоугаоника, троугла

// 3. На основу дана у недељи (задат бројем од 1 до 7) написати да ли је викенд

let vikend = 6 || 7

if (vikend < 6) {
    console.log('radni dan')
} else(vikend = 6 || 7) {
    console.log('vikend')
}