
//when user submits new task
// take the value of the input field
// add this to a li element 
// append the li element to the list 
//when user clicks on submit, print value to the console

const submitBtn = document.getElementById('submit');

//adds a new list item to the to do list containg the value of the input
function addListItem(){
    const listItem = document.createElement('li');
    const task = document.createTextNode($('#task').val());
    listItem.appendChild(task);
    const todoList = document.getElementById('todolist');
    todoList.appendChild(listItem);
    //clear the input
    $('#task').val(''); 
}

//write a function to remove a list item when it is clicked

//run function to add list item when user clicks on button
submitBtn.addEventListener('click', addListItem);
  
 



//create li element 
//add value of input field 
//append new li element to list


// when a user clicks on an element in the list
// remove the element from the list 