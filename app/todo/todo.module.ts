import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import {TodoService} from './todo.service';
import { TodoItemComponent } from './item/item.component';
import { TodoListComponent } from './list/list.component';
import { TodoDetailComponent } from './detail/detail.component';

@NgModule({
    imports:   [CommonModule,FormsModule],
    declarations: [TodoItemComponent,TodoListComponent,TodoDetailComponent],
    providers: [TodoService],
    exports:[TodoListComponent]
})


export class TodoModule {}