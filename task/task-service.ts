// import { Injectable } from '@angular/core';
// import { TaskInterface } from './task-interface';

// @Injectable({
//   providedIn: 'root', 
// })
// export class TaskService {

//   private tasks: TaskInterface[] = [
//     {id: 1, title: "Learn Angular", description: "understands angular essentials", completed:'completed'},
//     {id: 2, title: "Learn typescript", description: "advance Ts Concept", completed:'pending'},
//     {id:3,title:"Angular material",description:"Basic infromation",completed:'started'},
//     {id:4,title:"reverse KT for JS & TS",description:"explain each concept in detail",completed:"completed"},
//     {id:5,title:"Task on entireFronted",description:"cover HTML,SCSS,JS",completed:"pending"}
//   ];

//   getTasks(): TaskInterface[] {
//     return this.tasks;
//   }

//   addTask(task: TaskInterface) {   //task mai taskinterface ka jana imp hai
//     this.tasks.push(task);
//   }

//   deleteTask(id: number) {
//     const index = this.tasks.findIndex(x => x.id === id);
//     if (index !== -1) {
//       this.tasks.splice(index, 1);
//     }
//   }

//   updateTask(id:number,updateT:TaskInterface)
//   {
//     const index = this.tasks.findIndex(x => x.id === id);
//     if(index !=-1)
//     {
//       this.tasks[index]=updateT;
//     }
//   }
  
// }


import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface } from './task-interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private http = inject(HttpClient);
  private url = 'http://localhost:3000/tasks';


  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.url);
  }


  addTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.url, task);
  }


  deleteTask(id: number): Observable<any> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }


  updateTask(id: number, task: TaskInterface): Observable<TaskInterface> {
    return this.http.put<TaskInterface>(`${this.url}/${id}`, task);
  }
  

}

