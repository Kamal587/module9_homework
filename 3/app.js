'use strict'

const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function useRequest (url, callback){
    const xhr = new XMLHttpRequest;
    xhr.open('GET', url);
    xhr.onload = function () {
        const res = JSON.parse(xhr.response);
        if(callback){
            callback(res);
        }
    }
    xhr.send();
}

function sendDisplay(apiData){
    let images = '';
    apiData.forEach(element => {
        let image = `<img src = '${element.download_url}'
        <p> ${element.author}</p>`;
        images += image;
        
    });
    result.innerHTML = images;
}



btn.addEventListener('click', ()=> {
    let value = input.value;
    if(value < 1 || value > 10) {
        result.innerHTML = 'Число вне диапазона от 1 до 10';
    } else {
        useRequest(`https://picsum.photos/v2/list?limit=${value}`, sendDisplay)
    }
})




