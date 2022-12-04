// Getting Date Element.
var date = new Date();
var dd = date.getDate();
// Concatenating 0 if date is less then 10.
if (dd < 10) {
    dd = ("0".concat(dd));
}
// To get month with name.
var mm = date.getMonth();
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// To get current Year.
var yy = date.getFullYear();
// Getting HTML element to show date in that.
var dateElement = document.getElementById("date");
// Showing values in HTML.
dateElement.innerHTML += " ".concat(months[mm], " ").concat(dd, ", ").concat(yy);
// Getting all quantity values.
var q1 = document.getElementById("qt1");
var q2 = document.getElementById("qt2");
var q3 = document.getElementById("qt3");
var q4 = document.getElementById("qt4");
var q5 = document.getElementById("qt5");
var q6 = document.getElementById("qt6");
var q7 = document.getElementById("qt7");
var q8 = document.getElementById("qt8");
var q9 = document.getElementById("qt9");
var q10 = document.getElementById("qt10");
//  Putting all values in an array. 
var qS = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
// Getting all rates values.
var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");
var r4 = document.getElementById("r4");
var r5 = document.getElementById("r5");
var r6 = document.getElementById("r6");
var r7 = document.getElementById("r7");
var r8 = document.getElementById("r8");
var r9 = document.getElementById("r9");
var r10 = document.getElementById("r10");
// Making an array of all rate values.
var rS = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10];
// Getting all amount fields to show each row value.
var am1 = document.getElementById("amt1");
var am2 = document.getElementById("amt2");
var am3 = document.getElementById("amt3");
var am4 = document.getElementById("amt4");
var am5 = document.getElementById("amt5");
var am6 = document.getElementById("amt6");
var am7 = document.getElementById("amt7");
var am8 = document.getElementById("amt8");
var am9 = document.getElementById("amt9");
var am10 = document.getElementById("amt10");
// Setting all amount values in an array.
var amS = [am1, am2, am3, am4, am5, am6, am7, am8, am9, am10];
// Getting Grand Total field to show Total.
var grandTotal = document.getElementById("gt2");
// *********************
// Clear Button Function
// *********************
function clear() {
    // Clearing Costumer Name input Field.
    var cName = document.getElementById("cName");
    cName.value = '';
    // Clearing Address input field.
    var add = document.getElementById("address");
    add.value = '';
    // Clearing all quantity values.
    for (var i = 0; i < qS.length; i++) {
        qS[i].value = '';
    }
    // Clearing all rate values.
    for (var i = 0; i < rS.length; i++) {
        rS[i].value = '';
    }
    // Clearing all amounts.
    for (var i = 0; i < amS.length; i++) {
        amS[i].value = '';
    }
    // Clearing Grand Total.
    grandTotal.value = '';
}
// *****************
// Auto Sum Function
// *****************
function sum() {
    var qts = [];
    for (var i = 0; i < qS.length; i++) {
        qts.push(+qS[i].value);
    }
    var rts = [];
    for (var i = 0; i < rS.length; i++) {
        rts.push(+rS[i].value);
    }
    var newAms = [];
    for (var i = 0; i < amS.length; i++) {
        amS[i].value = qts[i] * rts[i];
        newAms.push(+amS[i].value);
    }
    newAms = newAms.reduce(function (storedVal, currVal) {
        return storedVal + currVal;
    });
    grandTotal.value = newAms.toString();
}
var n = document.getElementById("cName");
function calc() {
    alert("Hello! dear Sir/Ma'm ".concat(n.value, " Your Grand Total is ").concat(grandTotal.value));
    clear();
}
