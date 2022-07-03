'use strict'



const a = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`
       
const data = JSON.parse(a);
const res = data.list;

let list = [];

for(let item of res) {
    const name = item.name;
    const age = item.age;
    const prof = item.prof;

    list.push({name: name, age: age, prof: prof})
}

let result = {list}
console.log(result)


