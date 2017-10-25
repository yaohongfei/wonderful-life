import { Component } from '@angular/core';
import { TodoService } from './todo/todo.service';

@Component({
    selector: 'root-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {

    constructor(private todoService: TodoService) { }

    public name : string = 'yhf';

    getName(): string {
        return this.todoService.getName();
    }
   
}