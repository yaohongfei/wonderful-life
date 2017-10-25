import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo/todo.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExampleComponent } from './example/example.component';
import { routes } from './app.routes';
import { TodoModule } from './todo/todo.module';
import { TodoItemComponent } from './todo/item/item.component';
@NgModule({
    imports:        [BrowserModule, FormsModule, RouterModule.forRoot(routes),TodoModule],
    declarations:   [AppComponent, AboutComponent, ExampleComponent],
  
    bootstrap:      [AppComponent]
})
export class AppModule {}