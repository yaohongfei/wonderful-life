import { Component ,Input} from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo/list/list.component.html',
    styleUrls: ['app/todo/list/list.component.css']
})
export class TodoListComponent {

    @Input()
    public name : string ;

    newTodo: Todo = new Todo();
    constructor(private todoService: TodoService) { }
    
    



    // addTodo() {
    //     this.todoService.addTodo(this.newTodo);
    //     this.newTodo = new Todo();
    // }
    // get todos() {
    //     return this.todoService.getAllTodos();
    // }
}