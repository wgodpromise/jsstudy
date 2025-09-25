function func() {
    var result
    var num1 = Number(document.getElementById("myInput1").value);
    var num2 = Number(document.getElementById("myInput2").value);
    result = num1 + num2;
    error = "Одно из введёных значений не является числом!"
    if (!isNaN(result)) {
        document.getElementById("result").innerHTML = result;
    } else if (isNaN(result)) {
        document.getElementById("result").innerHTML = error;
    }
}