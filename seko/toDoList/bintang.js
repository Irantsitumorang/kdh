let star = '';

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         star += '* ';
//     }
//     star += '*';
//     star += '\n';
// }
// star += '\n';

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//         star += '* '
//     }
//     star += '*'
//     star += '\n'
// }
// star += '\n'

for (let i = 5; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        star += '* ';
    }
    // star += '*';
    star += '\n';
}
// star += '\n';

console.log(star);