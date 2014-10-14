var taskCount = 10;

doneTask = function() { 
	if (this.checked) {
		this.parentNode.classList.add("done");
		} else {
		this.parentNode.classList.remove("done");
}

localSave()
}

localSave = function() { 
	res = []
	var i;
	allEntries = document.querySelectorAll('li')
	for(i=0; i < allEntries.length; i++) {
	if (allEntries[i].className !="done" ) {
	res.push(allEntries[i].innerText);
	}
}
console.log(res)
localStorage.setItem("todoDatabase",JSON.stringify(res))
}

restoreTasks = function() {
	allTasks = JSON.parse(localStorage.getItem("todoDatabase"))
	taskList = document.querySelector("#Todolist");
	for(i = 0; i < allTasks.length; i++) {
		newli = document.createElement(


addTask = function() {
	var new li;
	task = document.querySelector("#taskbox");
	taskList = document.querySelector("#Todolist");
	priorityValue = document.querySelector("#priority").value;
	taskText = task.value;
	newli = document.createElement('li');
	newli.className = priorityValue;
	newcb = document.createElement('input');
	newcb.type = 'checkbox' ;
	newli.appendChild(newcb);
	t = document.createTextNode(taskText);
	newli.appendChild(t);
	taskList.appendChild(newli);
	task.value = "";
	newcb.onclick = doneTask;
	localSave()
}

	