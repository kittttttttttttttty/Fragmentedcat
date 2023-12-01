function displayValue() {
    var inputValue1 = document.getElementById("inputField1").value;
    var inputValue2 = document.getElementById("inputField2").value;
    var x = document.getElementById("output").innerHTML;
    if (inputValue1 === "answer") {
        if (isNaN(x)) {
            document.getElementById("output").innerHTML = "Error: Output is not a number.";
        } else {
            inputValue1 = parseFloat(x);
        }
    } else {
        inputValue1 = parseFloat(inputValue1);
    }

    if (inputValue2 === "answer") {
        if (isNaN(x)) {
            document.getElementById("output").innerHTML = "Error: Output is not a number.";
        } else {
            inputValue2 = parseFloat(x);
        }
    } else {
        inputValue2 = parseFloat(inputValue2);
    }

    var result = inputValue1 * inputValue2;
    document.getElementById("output").innerHTML = result;
}
function clearValue() {
  document.getElementById("output").innerHTML = "";
}
function clearallValue() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("inputField1").value = "";
    document.getElementById("inputField2").value = "";
    document.getElementById("inputField3").value = "";
    document.getElementById("inputField4").value = "";
    document.getElementById("inputField5").value = "";
}

function displayValue2() {
    var inputValue3 = document.getElementById("inputField3").value;
    var inputValue4 = document.getElementById("inputField4").value;
    var x = inputValue3 / inputValue4;
    document.getElementById("output").innerHTML = x;
  }
function displayValue3() {
  var inputValue5 = document.getElementById("inputField5").value;
  var x = eval(inputValue5);
  document.getElementById("output").innerHTML = x;
}
function backbutton() {
    location.replace("/oldprojects")
}