import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItem:string | null;
  todos:Todo[];
  constructor() {
    this.localItem=localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }
}

deleteTodo(x:Todo){
  const index = this.todos.indexOf(x);
  this.todos.splice(index,1);
  localStorage.setItem("todos",JSON.stringify(this.todos));
}

addTodo(x:Todo){
  this.todos.push(x);
  localStorage.setItem("todos",JSON.stringify(this.todos));
}

toggleTodo(x:Todo){
  const index = this.todos.indexOf(x);
  this.todos[index].active=!this.todos[index].active;
  localStorage.setItem("todos",JSON.stringify(this.todos));
}

  ngOnInit(): void {
  }

}
