//json: java script object notation

const details={

name: "akanshu",
age:29,
job: "tutor"

}
console.log(details["age"]);

console.log(Object.keys(details));
console.log(Object.values(details));

console.log(Object.keys(details).find(key=> details[key]===29));

// for in loop

for(const singleDetail in details){
console.log(singleDetail + ":" +details[singleDetail])


}