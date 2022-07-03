'use strict'

let primer = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();


const xmlDOM = parser.parseFromString(primer, 'text/xml')

let list = xmlDOM.querySelector('list')
const studentNodes = list.querySelectorAll('student')
list = [];

for( let studentNode of studentNodes){
    const nameNode = studentNode.querySelector('name');
    const firstName = nameNode.querySelector('first')
    const secondName = nameNode.querySelector('second')
    const ageNode = studentNode.querySelector('age')
    const profNode = studentNode.querySelector('prof');
    const langAttr = nameNode.getAttribute('lang')
    list.push({name: firstName.textContent + ' ' + secondName.textContent, age: ageNode.textContent, prof: profNode.textContent, lang: langAttr})
}


    const result = {list}
    console.log(result)


