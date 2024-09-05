const inputBox = document.querySelector(".task-submission-input"); 
//This selects the first element with the class task-submission-input 
//(your input field).
const taskContainer = document.getElementById("task-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
    }
    inputBox.value = "";   // Clear the input field after adding the task
    
}

