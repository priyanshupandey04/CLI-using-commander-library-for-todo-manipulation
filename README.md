Usage
To use this CLI, you will run the script with one of the following commands:

node <filename> <command> [arguments]
Replace <filename> with your script file name (e.g., todo.js).

Commands and Examples:-


1. Add a Todo
Add a new todo to the list by providing a description and starting time.

node <filename> add "<todo>" "<time>"

Example:
node todo.js add "Finish homework" "10:00 AM"
This adds a new todo item with the description Finish homework and the time 10:00 AM.

2. Delete a Todo
Delete a specific todo from the list by providing its description.

node <filename> delete "<todo>"
Example:
node todo.js delete "Finish homework"
This deletes the todo item Finish homework from the list.

3. Mark a Todo as Done
Mark a specific todo as completed by providing its description.

node <filename> done "<todo>"
Example:
node todo.js done "Finish homework"
This marks the Finish homework todo item as done.

4. View All Todos
View all your current todos along with their status.

node <filename> get-my-todo
Example:
node todo.js get-my-todo
This displays all your todos along with their descriptions, time, and completion status.

Sample Output:

1 :- "Finish homework" at 10:00 AM has been completed.
2 :- "Buy groceries" at 12:00 PM hasn't yet completed.
5. Clear All Todos
Clear the entire todo list.
node <filename> clear

Example:
node todo.js clear
This clears all the todos from your list and empties the todos.json file.

How Todos are Stored
Todos are stored in a todos.json file in the following structure:

[
  {
    "todo": "Finish homework",
    "time": "10:00 AM",
    "done": true
  },
  {
    "todo": "Buy groceries",
    "time": "12:00 PM",
    "done": false
  }
]


Each todo is stored as an object with the following fields:

todo: The description of the task.
time: The time when the task is scheduled.
done: A boolean value (true if the task is completed, false if not).
Error Handling
If the todos.json file is empty or missing, it will be automatically created, and the list will initialize as empty.
If you attempt to delete or mark as done a todo that doesn't exist, a message will inform you that the task is not found.
