
const submitBtn = document.getElementById('submit');

//adds a new list item to the to do list containg the value of the input
function addListItem(){
    const listItem = document.createElement('li');
    listItem.classList.add("list-item");
    const task = document.createTextNode($('#task').val());
    listItem.appendChild(task);
    const todoList = document.getElementById('todolist');
    todoList.appendChild(listItem);
    //clear the input
    $('#task').val(''); 
}

const listItem = document.getElementsByClassName('list-item');

//loop through li elements
for (let item of listItem) {
    item.addEventListener('click', function(){
       item.style.display = 'none';
       console.log('clicked');
    });
}


//run function to add list item when user clicks on button
submitBtn.addEventListener('click', addListItem);
  
 
