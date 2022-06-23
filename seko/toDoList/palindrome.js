// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false

function palindrome(str) {
    let strArray = str.toLowerCase().split('');
    let newArr = strArray.join('');
    let reverseArr = [...newArr].reverse().join('');

    if (newArr === reverseArr) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome('lari')); // false
console.log(palindrome('malam')); // true
console.log(palindrome('tidur')); // false
console.log(palindrome('tamat')); // true
console.log(palindrome('aba-aba')); // true
console.log(palindrome('hujan')); // false
console.log(palindrome('katak')); // true