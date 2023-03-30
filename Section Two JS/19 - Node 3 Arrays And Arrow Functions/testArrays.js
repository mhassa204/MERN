
let students = ["Usman", "Ali", "Hassan"];
let searchstudents = students.find(findali);

function findali(std){
    if (std=="Ali")
    return true;
    else
    return false;
}

students.splice(1,0,"Noman", "Zahid")
students.sort(customsort);
// function test(name) {
//     if (name == "Ali") return true;
//     else return false; //this can also be writtes as name=="Ali" ? true: false;
//   }
//   const testa = name => (name == "Ali" ? true : false); //this is a function with an input name
  
function customsort(a,b){
    if (b > a)
    return 1;
    else return -1;
}
  console.clear();
  console.log(students)
//   console.log(testa("Ali1"));
//   console.log(6 == 6 ? "WOW" : "Hello");
//   console.log(5 < 6 && "This is SOme Test")


let rate = [1,2,3];
let newrate = rate.map(function(r){
    return r*2;
})

console.log(newrate);