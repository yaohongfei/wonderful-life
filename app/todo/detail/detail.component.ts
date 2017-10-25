import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
@Component({
    selector: 'todo-detail',
    templateUrl: 'app/todo/detail/detail.component.html',
    styleUrls: ['app/todo/detail/detail.component.css']
})
export class TodoDetailComponent implements OnInit {
    selectedTodo: Todo;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private todoService: TodoService) {}
    ngOnInit() {
        let todoId = +this.route.snapshot.params['id'];
      
        if (!this.selectedTodo) {
            this.router.navigate(['/todo/list']);
        }
    }
   
}