let area = document.querySelector('textarea');
let read = document.querySelector('.read');
let write = document.querySelector('.write');
let div = document.querySelector('.block-text');
let del = document.querySelector('.delete');
let key = 'myKey';

function create(name, data) {
    localStorage.setItem(name, data);
};

function deleteItem() {
    div.textContent = '';
    area.value = '';
    localStorage.removeItem('myKey');
};

read.addEventListener('click', function(e) {
    if(area.value){
        let data = area.value;
        create(key, data);
    } else {
        alert('Введите текст в текстовое поле');
    }
});

write.addEventListener('click', function(){
    if(localStorage.getItem('myKey')) {
        let data = localStorage.getItem('myKey');
        div.textContent = data;
    } else {
        alert('Прочтите текст в текстовое поле');
    }
});

del.addEventListener('click', function() {
    deleteItem();
});