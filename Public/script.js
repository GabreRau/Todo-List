class Task{
    constructor(description){
        this.description = description;
        this.completed = false;
    }

    toggleComplete(){
        this.completed = !this.completed;
    }
}

class TaskManager{
    constructor(){
        this.task = []
    }
    addTask(description){
        const task = new Task(description);
        this.tasks.push(task);
        this.displayTask();
    }

    removeTask(index){
        this.tasks.splice(index, 1);
        this.displayTask();
    }

    toggleTaskCompletion
}