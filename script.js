function validateSyntax() {
  let input = document.getElementById("petInput").value;

  let pattern = /^pet_+[\d\w]+/; //Regex pattern perameters, input must start with pet_ and then followed by a name consisting of either letters, numbers, or a combination.

  //if else statement to confirm if input value follows Regex pattern requirments or not.
  if (pattern.test(input)) {
    document.getElementById("result").innerText = "Valid Syntax";
  } else {
    document.getElementById("result").innerText = "Invalid Syntax";
  }
}
