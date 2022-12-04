// Getting Date Element.
let date = new Date();
let dd:any = date.getDate();

// Concatenating 0 if date is less then 10.
if (dd < 10) {
    dd = (`0${dd}`);
}

// To get month with name.
let mm = date.getMonth();
let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// To get current Year.
let yy = date.getFullYear();

// Getting HTML element to show date in that.
let dateElement:any = document.getElementById("date");

// Showing values in HTML.
dateElement.innerHTML += ` ${months[mm]} ${dd}, ${yy}`

// Getting all quantity values.
let q1 = document.getElementById("qt1")! as HTMLInputElement;
let q2 = document.getElementById("qt2")! as HTMLInputElement;
let q3 = document.getElementById("qt3")! as HTMLInputElement;
let q4 = document.getElementById("qt4")! as HTMLInputElement;
let q5 = document.getElementById("qt5")! as HTMLInputElement;
let q6 = document.getElementById("qt6")! as HTMLInputElement;
let q7 = document.getElementById("qt7")! as HTMLInputElement;
let q8 = document.getElementById("qt8")! as HTMLInputElement;
let q9 = document.getElementById("qt9")! as HTMLInputElement;
let q10 = document.getElementById("qt10")! as HTMLInputElement;

//  Putting all values in an array. 
let qS =[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

// Getting all rates values.
let r1 = document.getElementById("r1")! as HTMLInputElement;
let r2 = document.getElementById("r2")! as HTMLInputElement;
let r3 = document.getElementById("r3")! as HTMLInputElement;
let r4 = document.getElementById("r4")! as HTMLInputElement;
let r5 = document.getElementById("r5")! as HTMLInputElement;
let r6 = document.getElementById("r6")! as HTMLInputElement;
let r7 = document.getElementById("r7")! as HTMLInputElement;
let r8 = document.getElementById("r8")! as HTMLInputElement;
let r9 = document.getElementById("r9")! as HTMLInputElement;
let r10 = document.getElementById("r10")! as HTMLInputElement;

// Making an array of all rate values.
let rS = [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10];

// Getting all amount fields to show each row value.
let am1 = document.getElementById("amt1")! as HTMLInputElement;
let am2 = document.getElementById("amt2")! as HTMLInputElement;
let am3 = document.getElementById("amt3")! as HTMLInputElement;
let am4 = document.getElementById("amt4")! as HTMLInputElement;
let am5 = document.getElementById("amt5")! as HTMLInputElement;
let am6 = document.getElementById("amt6")! as HTMLInputElement;
let am7 = document.getElementById("amt7")! as HTMLInputElement;
let am8 = document.getElementById("amt8")! as HTMLInputElement;
let am9 = document.getElementById("amt9")! as HTMLInputElement;
let am10 = document.getElementById("amt10")! as HTMLInputElement;

// Setting all amount values in an array.
let amS:any = [am1,am2,am3,am4,am5,am6,am7,am8,am9,am10];

// Getting Grand Total field to show Total.
let grandTotal = document.getElementById("gt2")! as HTMLInputElement;


// *********************
// Clear Button Function
// *********************
function clear() {
    // Clearing Costumer Name input Field.
    let cName = document.getElementById("cName")! as HTMLInputElement;
    cName.value = '';
    // Clearing Address input field.
    let add = document.getElementById("address")! as HTMLInputElement;
    add.value = '';

    // Clearing all quantity values.
    for (let i = 0; i < qS.length; i++) {
        qS[i].value = '';
    }
    
    // Clearing all rate values.
    for (let i = 0; i<rS.length; i++) {
        rS[i].value = '';
    }

    // Clearing all amounts.
    for (let i = 0; i < amS.length; i++) {
        amS[i].value = '';
    }

    // Clearing Grand Total.
    grandTotal.value = '';
}

// *****************
// Auto Sum Function
// *****************
function sum() {
    let qts = [];
    for (let i = 0; i < qS.length; i++) {
        qts.push(+qS[i].value);
    }
    let rts = [];
    for (let i=0; i< rS.length; i++) {
        rts.push(+rS[i].value);
    }

    let newAms:any[]= [];
    for (let i = 0; i < amS.length; i++) {
        amS[i].value = qts[i] * rts[i];
        newAms.push(+amS[i].value);
    }

    newAms = newAms.reduce((storedVal, currVal):number  => {
        return storedVal + currVal;
    })
    grandTotal.value = newAms.toString();
}

let n = document.getElementById("cName")! as HTMLInputElement;
function calc() {
    alert(`Hello! dear Sir/Ma'm ${n.value} Your Grand Total is ${grandTotal.value}`);
    clear();
}