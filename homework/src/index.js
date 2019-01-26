'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');

switch (process.argv[2]){
    default:
    case "help":
    fs.readFile("todo-help.txt", "UTF-8", (err, data) =>{
        console.log(data);
    });
    break;

    case "add" :
    fs.readFile("./task.txt", "UTF-8", (err, data) => {
        if (err) throw err;
        let todoList = JSON.parse(data);
       let item = { item : process.argv[3]};
        todoList.push(item);
        fs.writeFileSync(
            "./task.txt",
            JSON.stringify(todoList)
        );
        console.log(`item ${process.argv[3]}`);
    });
        break;

        case "delete" :
        fs.readFile("./task.txt", "UTF-8", (err, data) => {
           if (err) throw err;
           let todoList = JSON.parse(data);
           if (todoList.length==0) {
               console.log(
                   "This is empty --->nothing to delete"
               );
           } else {
            todoList.splice(process.argv[3] -1, 1);
            console.log(`item ${process.argv[3]} is deleted`);
            fs.writeFileSync(
                "./task.txt",
                JSON.stringify(todoList)
            );
        }
        });
           break;

           case "list":
           fs.writeFile("./task.txt", "UTF-8", (err, data) =>{
               let items = JSON.parse(data);
               console.log(items);

               console.log(`the list contains:`);
                   console.log(items);
                   for (let i of items){
                       console.log(i.item);
                   }
               
           });
           break;
           
           case "reset" :
           fs.writeFile("./task.txt", reset (), err =>{
               if (err) throw err;
           });
            function reset() {
                const reset = [];
                return JSON.stringify(reset);
            }
             console.log("list reseted");
               break;
}





//console.log(process.argv);
//console.log(process.argv[0]);
//console.log(process.argv[1]);
//console.log(process.argv[2]);