'use strict';

/*let tasks = ['Nakup!', 'Vynes koš!', 'Udělěj si domácí úkoly!', 'Vyper prádlo!', 'Vyluxuj!']

const updateTasks = () => {
  const tasksHtml = document.querySelector('.todo__tasks')
  tasksHtml.innerHTML = ''
  for (let i = 0; i < tasks.length; i++) {
    tasksHtml.innerHTML += `<div class="task">${tasks[i]}</div>`
  }
};

updateTasks();

const addTasks = () => {
  let addOne = document.querySelector('.new-task')
  tasks.push(addOne.value)
  updateTasks()
};

document.querySelector('.btn-add').addEventListener('click', addTasks);*/

let tasks = ['Nakup!', 'Vynes koš!', 'Udělěj si domácí úkoly!', 'Vyper prádlo!', 'Vyluxuj!']

function updateTasks() {
  const tasksHtml = document.querySelector('.todo__tasks')
  tasksHtml.innerHTML = ''
  for (let i = 0; i < tasks.length; i++) {
    tasksHtml.innerHTML += `<div class="task">${tasks[i]}</div>`
  }
};

updateTasks();

function addTasks() {
  let addOne = document.querySelector('.new-task')
  tasks.push(addOne.value)
  updateTasks()
};

document.querySelector('.btn-add').addEventListener('click', addTasks);