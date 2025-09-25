function func() {
    var result
    var num1 = Number(document.getElementById("myInput1").value);
    var num2 = Number(document.getElementById("myInput2").value);
    result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}