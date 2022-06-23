// 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
// Mengurutkan angka dengan cara 1
// angka terkecil ke angka terbesar 
function angkaTerkecil() {
    var harga = [3000, 1000, 5000, 6000, 2000, 4000];
    console.log('Angka awal di atas dan hasilnya di bawah :');
    console.log(harga);
    harga = harga.sort();

    return harga;
}

console.log(angkaTerkecil());
console.log('================================================================');

// angka terbesar ke angka terkecil
function angkaTerbesar() {
    var harga = [3000, 1000, 5000, 6000, 2000, 4000];
    console.log(harga);
    
    harga = harga.sort().reverse();
    
    return harga;
}

console.log(angkaTerbesar());
console.log('================================================================');


// mengurutkan angka dengan cara 2
// angka terkecil ke angka terbesar 
let angkaTerkecil2 = [3000, 1000, 5000, 6000, 2000, 4000];
console.log(angkaTerkecil2);
let angkaTerkecil2sort = angkaTerkecil2.sort(function(a,b) { 
    return a-b; 
});

console.log(angkaTerkecil2);
console.log('================================================================');


// angka terbesar ke angka terkecil
let angkaTerbesar2 = [3000, 1000, 5000, 6000, 2000, 4000];
console.log(angkaTerbesar2);
let angkaTerbesar2sort = angkaTerbesar2.sort(function(a,b) { 
    return b-a; 
});

console.log(angkaTerbesar2);
