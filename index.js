// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//console.log(`I'm ${age} years old. Happy birthday to me!`);

//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
// for (let i = 0; i < gifts.length; i++) {
//  console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }

//return gifts;
//}

//wrapGifts(gifts);

//for ([initialization]; [condition]; [iteration]) {
//[loop body]
//}


//array of string names are "Guadalupe","Ollie","Aki" length of this array is 2.
//event name is surprise.
//"Thank you, for the wonderful surprise gift!"
//"Guadalupe","Ollie","Aki" 
//thanks is the new array for the message
//names are inside the loop.

const name = [];
const message = [];
function writeCards(name, message) {
  let newMessage = []
  for (let i = 0; i < name.length; i++) {
    newMessage.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`);
  };

  return newMessage;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


//let message = "Thank You " be array [0]
//push message = "Thank you"[0] + ${name[i]},for the wonderful ${message} gift!`

function countDown() {
  let countdown = 0;
  while (countdown < 11) {
    console.log(countdown++)
  }
}
countDown(4);