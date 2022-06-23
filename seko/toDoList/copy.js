function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log("Segitiga 1 : " + '\n' + segitiga1(5));

function segitiga2(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                hasil += '* ';
            } else {
                hasil += ' '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log("Segitiga 2 : " + '\n' + segitiga2(5));

function segitiga3(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = panjang; j > 0; j--) {
            if (j > i) {
                hasil += ' ';
            } else {
                hasil += '* '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log("Segitiga 3 : " + '\n' + segitiga3(5));

let hasil = '';
for (let i = 5; i > 0; i--) {
    for (let j = 1; j <= 5; j++) {
        if (j >= i) {
            hasil += '* ';
        } else {
            hasil += ' '
        }
    }
    hasil += '\n';
}

console.log('Segitiga tanpa funct :' + '\n' + hasil);
// return hasil;