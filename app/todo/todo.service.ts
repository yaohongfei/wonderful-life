import {Injectable} from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  // 为了生成一个自增的id,保存最后一个生成的id
  lastId: number = 0;
  todos: Todo[] = []; // 保存任务列表
  constructor() {}
  
  getName () : string {

    return "hahaha";

  } 

}