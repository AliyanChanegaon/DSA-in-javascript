// Given an integer x, return true if x is a 
// palindrome , and false otherwise.



function isPalindrome(x) {
// Covering case for negative values as they are not palindrome
  if (x < 0) {

    return false;
  }

  // storing value of x in another variable as we are changing it inside loop
  let k = x;
  let rev = 0;
  // rev to store reverse value
  while (x != 0) {
// x%10 to store last degit rev *10 to move previous value to last position
    rev = x % 10 + rev * 10;

    x = Math.floor(x / 10);
//  math.floor to not consider decimal value


  }
  

  // returning true or false from below
  return rev == k;


}