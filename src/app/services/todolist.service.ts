import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodolistService {

// step 2
ApiUrl=`http://localhost:3000/todo`
// todo he data.json madhdhe ahe todo:[]
//step 1
  constructor(private _httpClient:HttpClient) { }

  // step 3
  // FOR CREATE
  postTodo(data:any):Observable<any>{
   return this._httpClient.post(this.ApiUrl,data)
// return  httpClient.CRUD method ( this.ApiUrl  , Getting data)
  }
//to using this todoMethod Inject service in component constructor
//.......................................................................................

// FOR READ
getTodo():Observable<any>{
  return this._httpClient.get(this.ApiUrl)
}
//........................................................................................

//FOR UPDATE
// for update we need 2 parameter to who update and what will update

putTodo(id:any,data:any):Observable<any>{
  let apiUrl1= `${this.ApiUrl}/${id}`

    return this._httpClient.put(apiUrl1,data)
}
//.........................................................................................

//FOR DELETE
deleteTodo(id:any):Observable<any>{
  let apiUrl2= `${this.ApiUrl}/${id}`
    return this._httpClient.delete(apiUrl2)
}
}
