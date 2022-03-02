function display( num) {
    document.getElementById("result") .value+= num;
}
function calc()
{
let x = document.getElementById("result").value
let y = eval(x)
document.getElementById("result").value = y
}
function ce()  
{  
var a = document.getElementById("result").value;
document.getElementById("result").value = a.substring(0, a.length - 1);

}
function Clear()
{
document.getElementById("result").value = ""
}