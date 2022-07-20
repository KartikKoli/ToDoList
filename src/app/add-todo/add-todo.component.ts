import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo>= new EventEmitter

  title: string;
  desc: string;
  onSubmit(){
    const x={
      sno:10,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(x)
    this.title="";
    this.desc="";
  }


  constructor() { }

  ngOnInit(): void {
  }

}
