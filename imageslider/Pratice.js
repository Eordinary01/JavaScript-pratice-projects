// function compareTriplets(a,b){
//     DishitaScore =0;
//     AarnaScore=0;

//     for(let i  =0; i< a.length; i++){
//         if(a[i] > b[i]){
//             DishitaScore++;
//         } else if( a[i] < b[i]){
//             AarnaScore++
//         }
//     }
//     return[DishitaScore,AarnaScore];
// }
// const a = [40, 10, 1111];
// const b = [31, 60, 110];
// const scores = compareTriplets(a, b);
// console.log(scores);







// function aVeryBigSum(ar) {
//     

//     let sum =0;
//     for( let i=0; i< ar.length; i++) {
//     sum+=ar[i];}
//     return sum;



// }
// const array = [10000000050, 1000000002, 1000000003];
// const sum = aVeryBigSum(array);
// console.log(sum);


// function simpleArraySum(ar) {
//     return array.reduce((acc, curr) => acc + curr, 0);
//   }

//   const array =[4,50,60,2,7,69];
//   const sum = simpleArraySum(Array);
//   console.log(sum);

//   function diagonalDifference(arr) {
//     let n = arr.length;
//     let primaryDiagonalSum = 0;
//     let secondaryDiagonalSum = 0;

//     for (let i = 0; i < n; i++) {
//       primaryDiagonalSum += arr[i][i];
//       secondaryDiagonalSum += arr[i][n - 1 - i];
//     }

//     return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
//   }



//   function plusMinus(arr) {
//     let n = arr.length;
//     let positiveCount = 0;
//     let negativeCount = 0;
//     let zeroCount = 0;

//     for (let i = 0; i < n; i++) {
//       if (arr[i] > 0) {
//         positiveCount++;
//       } else if (arr[i] < 0) {
//         negativeCount++;
//       } else {
//         zeroCount++;
//       }
//     }

//     let positiveFraction = positiveCount / n;
//     let negativeFraction = negativeCount / n;
//     let zeroFraction = zeroCount / n;

//     console.log(positiveFraction.toFixed(6));
//     console.log(negativeFraction.toFixed(6));
//     console.log(zeroFraction.toFixed(6));
//   }

//   const array = [-10, 1, 0, 3, 12, 50];
//   plusMinus(array);





// function staircase(n) {
//     for (let i = 1; i <= n; i++) {
//       let row = ' '.repeat(n - i) + '$'.repeat(i);
//       console.log(row);
//     }
//   }

//   staircase(10);



  // function miniMaxSum(arr) {
  //   let sum = 0;
  //   let min = arr[0];
  //   let max = arr[0];

  //   // Calculate the sum and find the minimum and maximum values
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //     if (arr[i] < min) {
  //       min = arr[i];
  //     }
  //     if (arr[i] > max) {
  //       max = arr[i];
  //     }
  //   }

  //   // Calculate the minimum and maximum sums
  //   let minSum = sum - max;
  //   let maxSum = sum - min;

  //   console.log(minSum + ' ' + maxSum);
  // }


  // const array = [10, 21, 32, 45, 54];
  // miniMaxSum(array);



// function birthdayCakeCandles(candles) {
//   let maxHeight = Math.max(...candles);
//   let count = 0;

//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] === maxHeight) {
//       count++;
//     }
//   }

//   return count;
// }

// // Example usage:
// const candleHeights = [2, 2, 2, 2, 2, 2, 2];
// const tallestCandles = birthdayCakeCandles(candleHeights);
// console.log(tallestCandles);




// let a = "Parth";
// let b = 69;
// console.log(a + b);

// console.log(typeof (a+b));


// const a = {
//   name:'Parth',
//   age: 18,
//   Profession :'Senior Developer',

// }
// a['Package'] = '20 Lakh' 
// a['Location'] = 'Bengaluru' 
// console.log(a);


// const direc = {
//   Broigus:	'Angry or irritated.',
// ByCatch:'A catch of fish that cannot be put to commercial use.',
// Blert:	'A cowardly person, someone who is weak.',
// Comp:'Providing products or services free of charge as a token of appreciation, a favor.',
// }

// console.log(direc);

// box = document.querySelector('div');
// function bgChange(color){
//   box.style.background = color;

// }


function changeBackgroundColor() {
  let colorSelect = document.getElementById("colorSelect");
  let selectedColor = colorSelect.value;
  document.body.style.backgroundColor = selectedColor;
}
function displayTime() {
  time = new Date();
  console.log(time)
  document.getElementById('time').innerHTML = time

};
setInterval(displayTime, 1000);




/*
 let sum =0;
 let n = prompt("Enter your number ");
 n = Number.parseInt(n);
  for( let i =0; i < n ; i++ ){
    sum += (i + 1)
  }
  console.log( " Sum of First " + n + " natural number is " +  sum ); */

/* const array = [ 4, 5, 6, 8];
 const target = [14];

 function findTwoNum(array, target){
   for( let i =0; i<array.length; i++) {
     const num1 = array[i];
     for (let j = i + 1 ; j < array.length; j++ ) {
     const num2 = array[j];
     if(num1 + num2 === 14) {
       return[num1 , num2];
     }

     }
   }
   return null;
 }

 const value = findTwoNum(array, target);
 console.log(value);   */



/* let marks = {
 Parth: 89,
 Justin: 69,
 lovish: 77,
 AD: 99,
}
// for (let i = 0; i < Object.keys(marks).length; i++) {
//   console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }


for(let key in marks) { 
 console.log("The marks of " + key + " are " + marks[key])
} 
*/


// let cn = 69;
// let i 
// while(i!=cn){
//   console.log("Guessed the number wrong! Try Again..")
//   i = prompt("Enter a number ")
// }
// console.log("You entered the correct number")


// let name = "Parth"
// let arr = Array.from(name)
// console.log(arr)




// let num = [4, 5, 8, 6, 9];

// //for...of

// for (let i of num) {
//   console.log(i)
// }



// let arr = [10, 20, 43, 50, 89, 90, 500];
//  let newarr = arr.filter((a)=>{
//   return a%10 == 0

// });
// console.log(newarr);



// let number = Math.floor((Math.random() *100) +1 );
// console.log(number);
// let chances =0;
// let input;
// while(input!= number) {
//   input= Number.parseInt(prompt("Guess the number between 0 to 100"))
//   if(input!= number){
//     console.log("Oops try again!!You guessed it wrong")
//     if(input>number) {
//       console.log("You guessed the number higher than the original number")
//     }
//     else{
//       console.log("Your guessed number is smaller than the original number")
//     }
//   }

//   chances++;
// }
// console.log("Congo you guessed the original number");
// console.log("Your score is " + (100-chances) +" and the number is " + number );




























