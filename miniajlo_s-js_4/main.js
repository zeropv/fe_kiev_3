'use strict';
function tagStyle() {
    let myElem = document.querySelectorAll('.task-1 p');
    for (let i = 0; i < myElem.length; i++) {
        myElem[i].style.backgroundColor = '#f00';
    }
};
tagStyle();

function addShadow() {
    let myImg = document.querySelectorAll('.task-1 img');
    for (let i = 0; i < myImg.length; i++) {
        myImg[i].style.boxShadow = '0 0 10px #f00';
    }
};

addShadow();

function setNumbers() {
    let blocks = document.querySelectorAll('.task-1 p');
    for (let a = 0; a < blocks.length; a++) {
        blocks[a].textContent = (a + 1) + '. ' + blocks[a].textContent;
    }
};

setNumbers();

// task 4
let pressed = 0,
    btns = {
        countOne: document.querySelector('.btn_count-one'),
        countTwo: document.querySelector('.btn_count-two')
    },

    action = {
        count: function() {
            document.querySelector('.counter').textContent = ++pressed
        }
    };

// Task 5
let task5 = {
    input1: document.querySelector('.task-5 .number'),
    input2: document.querySelector('.task-5 .degree'),
    btn: document.querySelector('.task-5 .btn_pow'),
    action: function(powed) {
        powed = Math.pow(task5.input1.value, task5.input2.value);
        alert(powed);
    }
};

// Task 6
let task6 = {

    btn: document.querySelector('.style-tag'),

    action: function() {
        let tag = document.getElementById('tagStyle').value;
         let tagStyle = document.querySelectorAll(tag);
        for (let i = 0; i < tagStyle.length; i++) {
            tagStyle[i].style.textDecoration = 'underline';
        }
    }
};

// Task 7
let task7 = {
    btn: document.querySelector('.enter'),
    action: function () {
        let age = document.getElementById('user_age').value;
        if (age > 16) {
            alert ('Добро пожаловать!');
        } else {
            alert ('Вы еще молоды...');
        }
    }
};
clickControl(task7.btn, task7.action);


function clickControl(control, action) {
    control.addEventListener('click', action);
}

clickControl(task5.btn, task5.action);
clickControl(task6.btn, task6.action);
clickControl(btns.countOne, action.count);
clickControl(btns.countTwo, action.count);
