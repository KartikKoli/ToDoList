import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() x: Todo
  @Input() i: number
  @Input() numbering: number
  @Output() tododelete: EventEmitter<Todo>= new EventEmitter
  @Output() todoCheckbox: EventEmitter<Todo>= new EventEmitter
  onclick(x:Todo){
    this.tododelete.emit(x);
  }

  onCheckboxClick(x:Todo){
    this.todoCheckbox.emit(x);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
