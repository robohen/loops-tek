// for(let i=10; i > 0; i--){
//     console.log(i);
// }

// for (let i = 0; i < 7; i++) {
//     console.log("#", i);
// }
// for(let i = 1; i < 20; i++){
//     let isPrime = true;

//     for(let j = 2; j < i; j++){
//         if(i % j === 0){
//             isPrime = false;
//                         break;
//         }
//     }
//     if(isPrime){
//         console.log(i);
//     }
// }

// for (let i =1; i<=20;i++){ even loop
//     if(i % 2 === 0){
//         console.log(i);
// }
// }
// for (let i = 1; i <= 20; i+=2) {
//     console.log(i);
// } odd loop
// for (let number = 1; number <= 20; number++) {
//     if (number === 2 || number % 2 !== 0) {
//       console.log(number);
//     }
//   }

//Output an increasing number of # symbols, from 1 to 7
let output = " ";
for (let i = 1; i <= 7; i++) {
    output += "#";
    console.log(output);
}