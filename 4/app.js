'use strict'


const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result')




btn.addEventListener('click', getSizeImage)

function getSizeImage(){
    
    const value1 = input1.value;
    const value2 = input2.value;
    if(value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300){
        result.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
    } else getPost(`https://picsum.photos/${value1}/${value2}`)
    
}

async function getPost(url){
    try{
        const response = await fetch(url);
        
        result.innerHTML = `<img src = '${response.url}' alt = 'images'/>`
       
    } catch (error) {
        console.log(error)
    }  
    
}



    