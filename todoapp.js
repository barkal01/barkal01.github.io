addTask = function() {
	var new li;
	task = document.querySelector("#taskbox");
	taskList = document.querySelector("#busylist");
	priorityValue = document.querySelector("#priority").value;
	newli = document.createElement('li');
	newli.className = proorityValue;
	newcb = document.createElement('input');
	newcb.type = 'checkbox' ;
	newli.appendChild(newcb);
	t = document.createTextNode(task.value);
	newli.appendChild(t);
	newcb.id = taskCount;
	taskList.appendChild(newli);
	task.value = "";
	newcb.onclick = doneTask;
}
	
	