import { Routes } from '@angular/router';

import { AboutRoutes } from './about/about.routes';
import { ExampleRoutes } from './example/example.routes';
import { TodoRoutes } from './todo/todo.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
  ...AboutRoutes,
  ...ExampleRoutes,
  ...TodoRoutes

];
