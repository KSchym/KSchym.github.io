var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

function addition() {
    let sum1 = parseFloat(a1.value) + parseFloat(b1.value);
    let sum2 = parseFloat(a2.value) + parseFloat(b2.value);
    let sum3 = parseFloat(a3.value) + parseFloat(b3.value);
    if (document.getElementById("additionButton").value == "Addition")
        document.getElementById("additionButton").value = `Addition:(${sum1}|${sum2}|${sum3})`
    else
        document.getElementById("additionButton").value = "Addition";
}

function subtraction() {
    let diff1 = parseFloat(b1.value) - parseFloat(a1.value);
    let diff2 = parseFloat(b2.value) - parseFloat(a2.value);
    let diff3 = parseFloat(b3.value) - parseFloat(a3.value);
    if (document.getElementById("subtractionButton").value == "Differenz/Vektor zwischen 2 Punkten")
        document.getElementById("subtractionButton").value = `Differenz/Vektor zwischen 2 Punkten:(${diff1}|${diff2}|${diff3})`
    else
        document.getElementById("subtractionButton").value = "Differenz/Vektor zwischen 2 Punkten";
}

function multiplication() {
    let product1 = parseFloat(a2.value) * parseFloat(b3.value) - parseFloat(a3.value) * parseFloat(b2.value);
    let product2 = parseFloat(a3.value) * parseFloat(b1.value) - parseFloat(a1.value) * parseFloat(b3.value);
    let product3 = parseFloat(a1.value) * parseFloat(b2.value) - parseFloat(a2.value) * parseFloat(b1.value);
    if (document.getElementById("multiplicationButton").value == "Multiplikation/Kreuzprodukt")
        document.getElementById("multiplicationButton").value = `Multiplikation/Kreuzprodukt:(${product1}|${product2}|${product3})`
    else
        document.getElementById("multiplicationButton").value = "Multiplikation/Kreuzprodukt";
}

function ammount() {
    let lenghtammount = parseFloat(a1.value)*parseFloat(a1.value) + parseFloat(a2.value)*parseFloat(a2.value) + parseFloat(a3.value)*parseFloat(a3.value);
    if (document.getElementById("lenghtButton").value == "Länge des Vektor 1")
        document.getElementById("lenghtButton").value = "Länge: √"+ lenghtammount;
    else
        document.getElementById("lenghtButton").value = "Länge des Vektor 1";
}

function skalar() {
    let skalarammount = parseFloat(a1.value) * parseFloat(b1.value) + parseFloat(a2.value) * parseFloat(b2.value) + parseFloat(a3.value) * parseFloat(b3.value);
    if (document.getElementById("skalarButton").value == "Skalarprodukt")
        document.getElementById("skalarButton").value = `skalar = ${skalarammount}`;
    else
        document.getElementById("skalarButton").value = "Skalarprodukt";
}

function angel() {
    let AxB = parseFloat(a1.value) * parseFloat(b1.value) + parseFloat(a2.value) * parseFloat(b2.value) + parseFloat(a3.value) * parseFloat(b3.value);
    let lengthA = Math.sqrt(parseFloat(a1.value)*parseFloat(a1.value) + parseFloat(a2.value)*parseFloat(a2.value) + parseFloat(a3.value)*parseFloat(a3.value));
    let lengthB = Math.sqrt(parseFloat(b1.value)*parseFloat(b1.value) + parseFloat(b2.value)*parseFloat(b2.value) + parseFloat(b3.value)*parseFloat(b3.value));
    let angelammount = AxB / (lengthA*lengthB);
    let angelRadians = Math.acos(angelammount);
    let angeldegre = angelRadians * (180 / Math.PI);
    if (document.getElementById("angelButton").value == "Winkel der beiden Vektoren")
        document.getElementById("angelButton").value = `Winkel = ${angeldegre.toFixed(3)}°`;
    else
        document.getElementById("angelButton").value = "Winkel der beiden Vektoren";
}

function skale() {
    let number = parseFloat(document.getElementById("extraNumber").value);
    let score1 = parseFloat(a1.value) * number;
    let score2 = parseFloat(a2.value) * number;
    let score3 = parseFloat(a3.value) * number;
    if (document.getElementById("skaleButton").value == "Vektor1 skaliert mit Nummer X")
        document.getElementById("skaleButton").value = `Skalierter Vektor1: (${score1}|${score2}|${score3})`;
    else
        document.getElementById("skaleButton").value = "Vektor1 skaliert mit Nummer X";
}