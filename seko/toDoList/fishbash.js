// 1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.

function fishbash(total) {

    for (let i = 1; i <= total; i++) {
        if (i % 15 === 0) {
            console.log('Fish-Bash');
        } else if (i % 3 === 0) {
            console.log('Fish');
        } else if (i % 5 === 0) {
            console.log('Bash');
        } else {
            console.log(i);
        }
    }
    return total;
}

fishbash(15);