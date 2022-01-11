// User interface Logic:
$(document).ready(function(){
  let message = prompt("type a sentence to be encoded");
  let newMessage = "hello there";
  // function printCode(input){
  //   console.log(input);
  // }
  // printCode(message);

  // let firstAndLast = "";
  function firstLast(parameter){
    let variable = (parameter.charAt(0) + parameter.charAt(parameter.length - 1)).toUpperCase();
    return reverse(variable);
  }
  // firstLast();
  // console.log(firstAndLast);
  
  // let lastAndFirst = "";
  function reverse(variable) {
    return variable.charAt(1) + variable.charAt(0);
  }

  // function runFunctions(){
  //   firstLast();
  //   reverse();
  // }
  // reverse();
  // console.log(lastAndFirst);

  console.log(firstLast(message));
  console.log(firstLast(newMessage));
});