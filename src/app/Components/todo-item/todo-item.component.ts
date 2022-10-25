import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Modules/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()todo!: Todo;
  @Input()index!: number;
  
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete(todo: Todo){
    this.deleteTodo.emit(todo);
  }

  onCheckBoxToggled(todo: Todo){
    this.toggleTodo.emit(todo);
  }

}
