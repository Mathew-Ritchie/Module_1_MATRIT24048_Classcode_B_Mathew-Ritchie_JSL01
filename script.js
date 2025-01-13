function validateSyntax() {
  let input = document.getElementById("petInput").value;

  let pattern = /^pet_+[\d\w]+/;

  if (pattern.test(input)) {
    document.getElementById("result").innerText = "Valid Syntax";
  } else {
    document.getElementById("result").innerText = "Invalid Syntax";
  }
}

//let result = ''; // Placeholder for validation result

// TODO: Write your validation logic here
// Check if input starts with 'pet_' and followed by alphanumeric characters

//document.getElementById("result").innerText = result;
