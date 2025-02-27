const add = document.querySelector('.add')
const taskContainer = document.querySelector('.task-container')
const newtask = document.querySelector('.task')

const handleAddTask = () => {

if (newtask.value.trim() === '') {
   alert('Preencha alguma tarefa')
     return
} 
const task = document.createElement('div');
task.classList.add('task-item');
const taskContent = document.createElement('p');
taskContent.innerText = newtask.value
taskContent.addEventListener('click', () => {
    taskContent.style.textDecoration = 
        taskContent.style.textDecoration === 'line-through' ? 'none' : 'line-through';
});
newtask.value = '';

const deleteitem = document.createElement('button');
deleteitem.innerHTML = '<i class="fas fa-trash-alt"></i>';
deleteitem.classList.add('delete')

deleteitem.addEventListener('click',() => {
task.remove()

})
    task.appendChild(taskContent); 
    task.appendChild(deleteitem); 
    taskContainer.appendChild(task); 
    newtask.style.boxShadow = 'none'
}
newtask.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleAddTask();
    }
});
add.addEventListener('click', handleAddTask)
newtask.addEventListener('click',() => {

newtask.style.boxShadow = '2px 2px 5px rgb(108, 106, 231)';


})



