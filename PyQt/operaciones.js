function respuesta(res){
    alert("Resultado de la operación: " + res)
}

function operation(tipo){
    // Obtain the current values of Value1 and Value2.
    var Value1 = new Number(
        document.getElementById("Value1").value);
    var Value2 = new Number(
        document.getElementById("Value2").value);
    var resultado = 0
    var otro = new Number (
        document.getElementById("selector").value);

    //Operación según parámetro

    //1 -> Suma
    //2 -> Resta
    //3 -> Mutiplicación
    //4 -> División

    if (tipo==1){
            resultado=Value1+Value2
        }
    else if (tipo == 2){
            resultado=Value1-Value2        
    }
    else if (tipo == 3){
            resultado=Value1*Value2        
    }
    else if (tipo == 4){
            resultado=Value1/Value2        
    }
    else if (tipo == 5) {
        operation(otro)
    }
    else resultado="--"
    document.getElementById("Result").setAttribute(
    "value", resultado);
    respuesta(resultado);
}

//Modo tradicional
function Suma()
{
    // Obtain the current values of Value1 and Value2.
    var Value1 = new Number(
        document.getElementById("Value1").value);
    var Value2 = new Number(
        document.getElementById("Value2").value);
    var resultado=Value1+Value2
    // Set the result to reflect the addition
    // of the two numbers.
    document.getElementById("Result").setAttribute(
        "value", resultado);
    respuesta(resultado);
}
function Resta()
{
    // Obtain the current values of Value1 and Value2.
    var Value1 = new Number(
        document.getElementById("Value1").value);
    var Value2 = new Number(
        document.getElementById("Value2").value);
    var resultado=Value1-Value2    
    // Set the result to reflect the addition
    // of the two numbers.
    document.getElementById("Result").setAttribute(
        "value", Value1 - Value2);
}
