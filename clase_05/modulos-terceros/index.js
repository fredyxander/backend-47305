const moment = require("moment");
const today = moment();
console.log(today.format("YYYY/MM/DD"))
//year/month/day
const birthdate = moment("1994-05-28");
console.log(birthdate.format("YYYY/MM/DD"));

if(birthdate.isValid()){
    console.log("formato valido")
} else {
    console.log("formato invalido");
}