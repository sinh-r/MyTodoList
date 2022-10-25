import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Modules/Todo';

@Component({
  selector: 'app-create-todo-item',
  templateUrl: './create-todo-item.component.html',
  styleUrls: ['./create-todo-item.component.css']
})
export class CreateTodoItemComponent implements OnInit {

  title!: string;
  description!: string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let todo: Todo = {
      sno: 8,
      title: this.title,
      description: this.description,
      isActive: true
    }

    this.todoAdd.emit(todo);
  }
}
