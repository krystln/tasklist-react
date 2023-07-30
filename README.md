# TaskList
### A web app for task management.
###### April, 2023


Uses react hook `useState` for state management for different tasks.


## How to Use

Goto : [https://krystln.github.io/tasklist-react/](https://krystln.github.io/tasklist-react/)

At initial load you will see :

![Home Page](public/HomePage.png)
<br>

To create a new Task, fill in the Task Creation Form and press `Create Task`<br>
![Create Task](public/CreateTask.png)<br>


To edit an already existing Task, press <img src="src/assets/edit.svg" width="20" height="20" />
This will open an editing menu where the create task form used to be. You can edit fields here and press `Edit Task` to save your changes.<br>
![Edit Task](public/EditTask.png)

To mark a Task for completion, press <img src="src/assets/complete.svg" width="20" height="20" />
This will add a strike through on the contents of the task, indicating that the task has been completed. <br>
![Complete Task](public/CompleteTask.png)

To undo this action, press <img src="src/assets/undo.svg" width="20" height="20" />
This will revert task completion.<br>

To delete a task, press <img src="src/assets/delete.svg" width="20" height="20" /><br>

You can undo Edit or Delete with `Undo Edit` & `Undo Delete` buttons just below the create task form.


