// soal 1
// dengan menggunakan while

var number = 1;

while (number < 21) {
    console.log("Halo, Saya orang ke", number);
    number++
}

//dengan menggunakan for

for (var i = 1; i < 21; i++) {
    console.log("Halo, saya orang ke", i);
}

// soal 2

let huruf = "";

for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 5; j++) {
        huruf += "o";
    }

    if (i <= 100) {
        huruf += " ";
    }
}

console.log(huruf);
