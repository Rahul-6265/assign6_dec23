//Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).

var a = prompt("Enter the number");
   n = 2;
  for(  var i = n ; i <= a ; i++) {
     if(i % 2 == 0) {
        console.log(i);
     }
  }
