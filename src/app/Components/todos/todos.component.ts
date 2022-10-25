import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Modules/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  popup: boolean = false;
  localTodo: string | null;
  index: number = 0;


  constructor() { 
    this.localTodo = localStorage.getItem("todo");

    if(this.localTodo !== null){
      this.todos = JSON.parse(this.localTodo);
    }

  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo, 0);
    this.todos.splice(index, 1);

    this.saveTodos();
  }

  addTodo(todo: Todo){
    this.todos.push(todo);

    this.saveTodos();
  }

  toggleTodo(todo: Todo){
    let index = this.todos.indexOf(todo, 0);
    this.todos[index].isActive = !this.todos[index].isActive;

    this.saveTodos();
  }
  
  saveTodos(){
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

}
