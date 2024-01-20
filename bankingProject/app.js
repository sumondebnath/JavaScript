

function depositehandel() {
        // deposite part
    var depoInVal = document.getElementById("depoAmount").value;
    var depositeVal = document.getElementById("depoValue").innerText;
    
    var convertInVal = covertToNum(depoInVal);
    var convertDepoVal = covertToNum(depositeVal);

    var sum = convertInVal + convertDepoVal;
    document.getElementById("depoValue").innerText = sum;
        // total part
    var totalAmount = document.getElementById("totalAmo").innerText;
    var convertTotalAmount = covertToNum(totalAmount);

    var totalSum = convertInVal + convertTotalAmount;
    document.getElementById("totalAmo").innerText = totalSum;
        // input null part.
    document.getElementById("depoAmount").value = null;
}

function covertToNum(value) {
    return parseFloat(value);
}

function withdrawhandel(){
        // withdraw part
    var withInVal = document.getElementById("withAmount").value;
    var withdrawVal = document.getElementById("withValue").innerText;

    var convertWithIn = covertToNum(withInVal);
    var convertWithVal =  covertToNum(withdrawVal);
    
    var withSum = convertWithIn + convertWithVal;
    document.getElementById("withValue").innerText = withSum;

        // total part
    var totalAmount = document.getElementById("totalAmo").innerText;
    var convertTotalAmount = covertToNum(totalAmount);

    var totalSum = convertTotalAmount - convertWithIn;
    document.getElementById("totalAmo").innerText = totalSum;

        // input null part.
    document.getElementById("withAmount").value = null;
}