import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector:'tido-item',
    templateUrl: 'app/todo/item/item.component.html',
    styleUrls: ['app/todo/item/item.component.css']
})

export class TodoItemComponent {
    @Input() todo: Todo;
    
    constructor(private todoService: TodoService, private router: Router) { }
  
}