// **** Numbers **** //
// 1. Loop over the following array, showing each element, and ask the user if he wants to continue.
let arr = ['first', 'second', 'third', 'last'];
let _continue = true;
let i = 0;

// while (_continue) {
//   console.log(arr[i]);

//   i = (i + 1) % arr.length;

//   _continue = confirm('Press OK to continue');
// }

// 2. Swap Two Number Variables Without Using a Temp Variable.
let a = 10,
  b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log('a = ' + a + ', b = ' + b); // a = 20, b = 10

// 3. Swap Two String Variables Without Using a Temp Variable.
let m = 'hello';
var j = 'goodbye';
m = j + m;
j = m.slice(j.length);
m = m.substr(0, m.length - j.length);
console.log(m);
console.log(j);

// **** Loops **** //
// 1. Create a variable N with a randomized number in it, Print in console view a sequence of N lines, each line consisting of a string of "*"'s according to the line number.
let str = '';
let N = Math.floor(Math.random() * (10 - 1)) + 1;
for (let x = 1; x <= N; x++) {
  str += '*';
  console.log(str);
}

// Now do it the other way around
for (let x = N; x >= 1; x--) {
  let numMax = x;
  let str1 = '';
  while (numMax) {
    str1 += '*';
    numMax--;
  }
  console.log(str1);
}

// **** Strings **** //
function reverse(str) {
  let reversed = '';
  while (str) {
    reversed += str.slice(str.length - 1, str.length);
    str = str.slice(0, str.length - 1);
  }
  return reversed;
}
console.log(reverse('dog')); //should return "god"
console.log(reverse('race car')); //should return "rac ecar"

// PALINDROME
function isPalindrome(str) {
  for (let k = str.length - 1, y = 0; k >= y; k--, y++) {
    if (str[k] !== str[y]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('po'));

// encrypt - Given a string, encrypt it
function encrypt(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i) + 1;
    result += String.fromCharCode(ascii);

  }
  return result;
}
console.log(encrypt('cat'));

// DECRYPTION - encrypt reverse
function decrypt(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i) - 1;
    result += String.fromCharCode(ascii);

  }
  return result;
}
console.log(decrypt('dbu'));

// harder

// **** Arrays **** //
// 1. DUPES - Given an array, return a new array that removes any duplicates
let obj = {};

function duplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (obj.hasOwnProperty(value)) {
      arr.splice(i, 1);
      console.log(arr);

    } else {
      obj[value] = value;
      console.log(obj);
    }
  }
  return arr;
}

let array = ['dog', 'cat', 'camel', 'bee', 'dog', 'elephant', 'dolphin'];
console.log(duplicate(array));


// 2. JUMBLED - Given two arrays, return one array that includes all of the elements of both arrays, in a randomized order
let colors = ['red', 'indigo', 'white', 'teal', 'yellow'];
let foods = ['bread', 'cheese', 'cucumber'];

function jumble(arr1, arr2) {
  let newArray = arr1.concat(arr2);
  let jumbledArr = [];
  for (let i = 0; i < newArray.length; i++) {
    let N = Math.floor(Math.random() * Math.floor(newArray.length));

    jumbledArr.push(newArray[N]);
    newArray.splice(N, 1);
    i--;
  }
  return jumbledArr;
}
console.log(jumble(colors, foods));

// Final Exercise - sort arrays
let boxes = [3, 6, 89, 2, 65, 4, 1, 90, 48];

function sortBySize(arr) {
  let temp, j;
  for (let y = 1; y < arr.length; y++) {
    temp = arr[y];
    j = y;

    while(j > 0 && arr[j - 1] > temp){
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

console.log(sortBySize(boxes));