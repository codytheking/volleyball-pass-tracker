
var total = 0;
var numVals = 0;
var count = [0, 0, 0, 0];

function avg(number)
{
    var num = number;
    var error = false;
    total += num;
    numVals++;
    count[num]++;

    // print result to screen
    document.getElementById("answer").innerHTML = "Current average (" +
    numVals + "): " + Math.round((total / numVals) * 100) / 100;

    document.getElementById("zeros").innerHTML = "\nZero: " + count[0];
    document.getElementById("ones").innerHTML = "\nOnes: " + count[1];
    document.getElementById("twos").innerHTML = "\nTwos: " + count[2];
    document.getElementById("threes").innerHTML = "\nThrees: " + count[3];
}

function resetTotal()
{
    total = 0;
    numVals = 0;
    document.getElementById("answer").innerHTML = "";
    document.getElementById("zeros").innerHTML = "";
    document.getElementById("ones").innerHTML = "";
    document.getElementById("twos").innerHTML = "";
    document.getElementById("threes").innerHTML = "";
    count = [0, 0, 0, 0];
}
