'use strict'


let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

document.addEventListener('DOMContentLoaded', ()=> {
    let imagesHtml = localStorage.getItem("images");
    if (imagesHtml) {
        result.innerHTML = imagesHtml;
    }
})


btn.addEventListener('click', function hasDiapazon(){
    const value1 = input1.value;
    const value2 = input2.value;
    if((value1 < 1 || value1 > 10 || !Number(value1)) && (value2 < 1 || value2 > 10 || !Number(value2))) {
        result.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
    } else if(value2 < 1 || value2 > 10 || !Number(value2)) {
        result.innerHTML = 'Лимит вне диапазона от 1 до 10'
    } else if(value1 < 1 || value1 > 10 || !Number(value1)){
        result.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
    } else getFetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`);
});

async function getFetch(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        result.innerHTML = 'СПИСОК:';
        localStorage.clear();
        let images ='';
        for(let key in data){
            let item = data[key];
            images += `
            <li>
            <h4>${item.author}</h4>
            <img src ='${item.download_url}' width = '150' height = '150' alt ='images' />
            </li>`;
            localStorage.setItem("images", images);
            result.innerHTML = images;
            
        }
    } catch (error) {
        console.log(error)
    }
}


