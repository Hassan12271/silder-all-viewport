// let Number = +prompt("Enter Your Wnated Number");
// let length = +prompt("Enter Where Did You Want");

// for (let i = 1; i <= length; i++){
//     document.write(`${Number} x ${i} = ${Number * i} <br/>`);
// }
let check = prompt("Please Enter your City");

let Cities = ['karachi'  , 'lahore' , 'peshawer' , 'Islamabad' , 'quata'];

for (i = 0; i < Cities.length; i++){
    if(Cities[i].toLowerCase() === check.toLowerCase()){
        console.log(`your are good ${i}`);
        // break;
    }
    else if(Cities[i].toLowerCase() !== check.toLowerCase()){
        console.log(`your are not a good ${i}`);
        // break;
    }
}