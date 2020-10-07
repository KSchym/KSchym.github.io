var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

function showScale() {
    let output = calcScale(a1,a2,a3);
    let button = document.getElementById("skaleButton");
    if (button.value == "Vektor1 skaliert mit Nummer X")
        button.value = `Skalierter Vektor1: (${output[0]}|${output[1]}|${output[2]})`;
    else
        button.value = "Vektor1 skaliert mit Nummer X";
}

function showAddition() {
    let output = calcAddition();
    let button = document.getElementById("additionButton");
    if (button.value == "Addition")
        button.value = `Addition:(${output[0]}|${output[1]}|${output[2]})`
    else
        button.value = "Addition";
}

function showSubstraction() {
    let output = calcSubstraction();
    let button = document.getElementById("subtractionButton");
    if (button.value == "Differenz/Vektor zwischen 2 Punkten")
        button.value = `Differenz/Vektor zwischen 2 Punkten:(${output[0]}|${output[1]}|${output[2]})`
    else
        button.value = "Differenz/Vektor zwischen 2 Punkten";
}

function showMultiplication() {
    let output = calcMultiplication();
    let button = document.getElementById("multiplicationButton");
    if (button.value == "Multiplikation/Kreuzprodukt")
        button.value = `Multiplikation/Kreuzprodukt:(${output[0]}|${output[1]}|${output[2]})`
    else
        button.value = "Multiplikation/Kreuzprodukt";
}

function showMagnitude() {
    let lenghtammount = calcMagnitude(a1,a2,a3);
    let button = document.getElementById("lengthButton");
    if (button.value == "Länge des Vektor 1")
        button.value = "Länge: √" + lenghtammount;
    else
        button.value = "Länge des Vektor 1";
}

function showDotProduct() {
    let output = calcScalar();
    let button = document.getElementById("skalarButton");
    if (button.value == "Skalarprodukt")
        button.value = `skalar = ${output}`;
    else
        button.value = "Skalarprodukt";
}

function showAngle() {
    let output = calcAngle();
    let button = document.getElementById("angelButton");
    if (button.value == "Winkel der beiden Vektoren")
        button.value = `Winkel = ${output.toFixed(3)}°`;
    else
        button.value = "Winkel der beiden Vektoren";
}


function calcScale(a1, a2, a3) {
    let number = parseFloat(document.getElementById("extraNumber").value);
    let score1 = parseFloat(a1.value) * number;
    let score2 = parseFloat(a2.value) * number;
    let score3 = parseFloat(a3.value) * number;

    return [score1, score2, score3];
}

function calcAddition() {
    let sum1 = parseFloat(a1.value) + parseFloat(b1.value);
    let sum2 = parseFloat(a2.value) + parseFloat(b2.value);
    let sum3 = parseFloat(a3.value) + parseFloat(b3.value);

    return [sum1, sum2, sum3];
}

function calcSubstraction() {
    let diff1 = parseFloat(b1.value) - parseFloat(a1.value);
    let diff2 = parseFloat(b2.value) - parseFloat(a2.value);
    let diff3 = parseFloat(b3.value) - parseFloat(a3.value);

    return [diff1, diff2, diff3];
}

function calcMultiplication() {
    let product1 = parseFloat(a2.value) * parseFloat(b3.value) - parseFloat(a3.value) * parseFloat(b2.value);
    let product2 = parseFloat(a3.value) * parseFloat(b1.value) - parseFloat(a1.value) * parseFloat(b3.value);
    let product3 = parseFloat(a1.value) * parseFloat(b2.value) - parseFloat(a2.value) * parseFloat(b1.value);

    return [product1, product2, product3];
}

function calcMagnitude(x, y, z) {
    return parseFloat(x.value) * parseFloat(x.value) + parseFloat(y.value) * parseFloat(y.value) + parseFloat(z.value) * parseFloat(z.value);
}

function calcScalar() {
    return parseFloat(a1.value) * parseFloat(b1.value) + parseFloat(a2.value) * parseFloat(b2.value) + parseFloat(a3.value) * parseFloat(b3.value);
}

function calcAngle() {
    return Math.acos(calcScalar() / (calcMagnitude(a1, a2, a3) * calcMagnitude(b1, b2, b3))) * (180 / Math.PI);
}