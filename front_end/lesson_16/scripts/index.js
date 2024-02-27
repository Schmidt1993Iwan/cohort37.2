let todoList = [
    {task: "Купить молоко", done: false, deadline: "2024-02-23"},
    {task: "Заплатить за интернет", done: true, deadline: "2024-02-20"},
    {task: "Позвонить маме", done: false, deadline: "2024-02-22"},
    {task: "Почитать книгу", done: false, deadline: "2024-02-28"},
    {task: "Сделать домашнее задание", done: true, deadline: "2024-02-21"},
    {task: "Посмотреть фильм", done: false, deadline: "2024-02-24"},
    {task: "Помыть посуду", done: true, deadline: "2024-02-22"},
    {task: "Погулять с собакой", done: false, deadline: "2024-02-23"},
    {task: "Заказать пиццу", done: false, deadline: "2024-02-25"},
    {task: "Посетить врача", done: true, deadline: "2024-02-20"},
  {task: "Починить компьютер", done: false, deadline: "2024-02-26"},
    {task: "Подарить цветы подруге", done: true, deadline: "2024-02-21"},
    {task: "Поиграть в видеоигры", done: false, deadline: "2024-02-27"},
    {task: "Послать резюме", done: true, deadline: "2024-02-20"},
    {task: "Поехать в отпуск", done: false, deadline: "2024-02-29"}
  ];

  const listDone = todoList.filter(task => task.done);

  console.log(listDone);
  
  
  
  // const listItemTwoElement = document.querySelector('#second-item');
  //document.getElementById('second-item');
  // console.log(listItemTwoElement);
  // listItemTwoElement.style.backgroundColor = 'blue';
  
  // listItemTwoElement.classList.add('list-item_done');
  
  // const listItemTwoHandler = () => {
  //     listItemTwoElement.classList.toggle('list-item_done');
  // }
  
  // listItemTwoElement.addEventListener('click', listItemTwoHandler);
  
  const inputElement = document.querySelector('.task-input');
  const createButton = document.querySelector('.btn');
  let userInputText;
  
const createButtonHandler = () => {
    const listAllElements = document.querySelector('.list');
    todoList.forEach(taskObj => {
        const newListItem = document.createElement('li');
        newListItem.textContent = `${taskObj.task}`;
        newListItem.classList.add('list-item');
        if(taskObj.done){
        newListItem.classList.add('list-item_done');
        }
        listAllElements.append(newListItem);
});
}
   createButtonHandler();

  createButton.addEventListener('click', createNewTask);
  const createNewTask () => {

  }
  
  // const str = 'word';
  // console.log(`My favourite word is "${str}"`);
  
  const inputHandler = (evt) => {
    //   userInputText = evt.target.value;
      userInputText = newTask.value;
      
  }

  
  newTask.addEventListener('input', inputHandler);
  
  const btnHandler = (evt) => {
      evt.preventDefault();
  
  }
  