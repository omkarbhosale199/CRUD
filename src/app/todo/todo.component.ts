import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
// If we want to show data on browser then use *ngFor and string interpolation
// so first we take variable

showTodoList:any[] = []; // for readTodo--->>> value in howTodoList array read by readTodo(){}

  constructor(private _TodolistService:TodolistService) { }

  ngOnInit(): void {
    this.readTodo() // for rendering on browser
  }
  //CRUD
// note- subscribe have 2 method next,error,completed Or we can use arrow function

  // FOR CREATE
  createTodo(){
    // create obj in createTodo method
  let todo ={
    id:new Date().getTime(),   // It will create random ID
    title:`Practice CRUD`
  }

  this._TodolistService.postTodo(todo).subscribe(res=>{
      //   service   serviceMethod(obj created in component).subscribe(res=>{log})
    console.log("Resource create",res);
    this.readTodo()
    // this.readTodo() are use to after create it will also read (Combination of post and put)
  })
  }
  // // for posting data there are need to call this method using button etc..........IMP
  //...............................................................................................

  // FOR READ
  readTodo(){
    this._TodolistService.getTodo().subscribe(res=>{
      console.log("get all todos",res);
      this.showTodoList=res; // data get using getTodo() method will here and this showTodoList will iterate in html using *ngFor
    })}
// for getting data there are need to call this method using button etc..........IMP
//.................................................................................................

//FOR UPDATE
updateTodo(todo:any){
  console.log("edited call",todo);
  // hard code value
  let data ={
    id: new Date().getTime(),
    title:`updated --->>> more practice needed`
  }
  this._TodolistService.putTodo(todo.id,data).subscribe(res=>{console.log(`Data updated successfully ${res}`);
// to show updated value on browser instantly then call readTodo()
this.readTodo()
  })
}
//......................................................................................................

//FOR DELETE
deleteTodo(id:any){
  console.log("delete called",id);
  this._TodolistService.deleteTodo(id).subscribe(res=>{
    console.log(`${res} this record is deleted `);
// to show updated value on browser instantly then call readTodo()
this.readTodo()
  })

}
}
