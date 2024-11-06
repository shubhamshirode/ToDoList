// Date
let date = document.getElementById("date");
const today = new Date();
date.innerText = today.toLocaleDateString('en-IN');

// const day = today.getDay();
// console.log(day);
// const month = today.getMonth() +1 ; // +1 because jan is 0
// const year = today.getFullYear();
// date.innerText= day + "-"+ month + "-" + year ;

// Printing Day
let days = document.getElementById("day");
let dayCount = today.getDay();
// it returns the number representing the days starting from 0
let day = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
for (let i = 0; i <=day.length; i++) {
    if (i  == dayCount) {
        days.innerText = day[i];
    }
}


let create = document.getElementById("create");
create.addEventListener("click", () => {
    let input_field = document.getElementById("input_field")
    // create input field 
    let inp_element = document.createElement("input");
    inp_element.setAttribute("id","task_text")
    inp_element.style.padding = "0.5rem";
    inp_element.style.margin = "1rem";
    inp_element.style.border = "none";
    inp_element.style.width = "25rem";
    inp_element.placeholder = "Enter Task";
    inp_element.style.borderRadius = "15px"


    // crete add button
    let button = document.createElement("button");
    button.setAttribute("id", "add_task");
    button.innerText = "Add";
    button.style.padding = " 0.5rem 2rem";
    button.style.border = "none";
    button.style.borderRadius = "15px"

    input_field.innerHTML = " ";
    input_field.appendChild(inp_element);
    input_field.appendChild(button);
    
    // chek box create
    let chek_box = document.createElement("input");
    chek_box.setAttribute("type","chekbox");

   
    let task_field = document.getElementById("task_field");
    let task_text = document.getElementById("task_text");

    let addtask = document.getElementById("add_task");
    addtask.addEventListener("click",() => {
        task_field.innerHTML = task_text.value;
        input_field.innerText = " ";

        let chek_box = document.createElement("input");
        chek_box.style.padding = "0.5rem"

        // chek_box.setAttribute("type","chekbox");
        // input_field.innerHTML=chek;
    })

})






