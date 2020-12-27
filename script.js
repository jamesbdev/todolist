

//when user submits new task
// take the value of the input field
// add this to a li element 
// append the li element to the list 


//when user clicks on submit, print value to the console
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(){
    $('#first-task').html($('#task').val())
    $('#task').val('')
    //clear the input
})



// when a user clicks on an element in the list
// remove the element from the list 