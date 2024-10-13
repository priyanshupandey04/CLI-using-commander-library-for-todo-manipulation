const { Command } = require('commander');
const program = new Command();
const fs = require("fs");
const path = 'todos.json';
program
    .command("add")
    .description("Add new todo")
    .argument("<todo>", "Enter todo you want to add")
    .argument("time", "Enter starting time")
    .action((todo, time) => {
        try {
            const data = fs.readFileSync(path, 'utf-8');
            let dataArray;
            if (data.length === 0) {
                dataArray = [];
            } else {
                dataArray = JSON.parse(data);
            }
            let jsonData2 = {
                "todo": `${todo}`,
                'time': `${time}`,
                'done': false
            };
            dataArray.push(jsonData2)
            fs.writeFileSync(path, JSON.stringify(dataArray));
        } catch (err) {
            console.error("Error reading or parsing JSON file:");
        }
    });


program.command("delete").description("Delete todo.")
    .argument("<todo-to-be-deleted>")
    .action((todo) => {
        try {
            const data = fs.readFileSync(path, "utf-8");
            if (data.length <= 2) {
                console.log("Oops!! entered todo doesn't exist.");
            } else {
                let ind = data.indexOf(todo);
                if (ind == -1) {
                    console.log("Oops!! entered todo doesn't exist.");
                } else {
                    let dataArray = JSON.parse(data);
                    dataArray = dataArray.filter(todos => todos.todo != todo);
                    fs.writeFileSync(path, JSON.stringify(dataArray))
                }
            }
        } catch (err) {
            console.error("Error reading or parsing JSON file:", err);
        }
    })

program.command("done").description("Mark todo done.")
    .argument("<todo>", "Enter todo which you have done.")
    .action(
        (todoCompleted) => {
            try {
                const data = fs.readFileSync(path, "utf-8");
                if (data.length <= 2) {
                    console.log("Oops your todo list is empty , add new todo first.");
                } else {
                    let dataArray = JSON.parse(data);
                    let ind = dataArray.findIndex(todos => todos.todo === todoCompleted);
                    if (ind == -1) {
                        console.log(`${todoCompleted} is not there in your todo list.`);
                    } else {
                        dataArray[ind].done = true;
                    }
                    fs.writeFileSync(path, JSON.stringify(dataArray))
                }

            } catch (err) {
                console.error("Error reading or parsing JSON file:", err);
            }
        }
    )


program.command("get-my-todo").description("Shows your existing todos.")
    .action(
        () => {
            try {
                fs.readFile(path, 'utf-8', (err, data) => {
                    if (data.length <= 2) {
                        console.log("Empty todo list.");
                        return;
                    }
                    const dataArray = JSON.parse(data);
                    for (let i = 0; i < dataArray.length; i++) {
                        console.log(`${i + 1} :- "${dataArray[i].todo}" at ${dataArray[i].time} has${dataArray[i].done == true ? "" : "n't yet"} completed.`);
                    }
                })
            } catch (err) {
                console.error("Error reading or parsing JSON file:", err);
            }
        }
    )

program.command("clear").description("clear todo list")
    .action(
        () => {
            try {
                fs.readFile(path, 'utf-8', (err, data) => {
                    if (data.length > 0) {
                        let dataArray = JSON.parse(data);
                        dataArray = [];
                        fs.writeFileSync(path, JSON.stringify(dataArray));
                    }
                    console.log(`Successfully deleted list.`);
                })
            } catch (err) {
                console.error("Error reading or parsing JSON file:", err);
            }
        }
    )

program.parse(); 
