function ExternalSayHello()
{
    var msg="Saludo externo "
    var count = 1
    alert(msg + count);
}
function WriteText()
{
 document.getElementById("myText").innerHTML = Date();

ExternalSayHello()
}
