// import { Component, inject, OnInit } from '@angular/core'; // 1. Added OnInit
// import { CommonModule } from '@angular/common'; 
// import { FormsModule } from '@angular/forms';
// import { TaskInterface } from './task-interface';
// import { TaskService } from './task-service';

// @Component({
//   selector: 'app-task',
//   standalone: true,
//   imports: [CommonModule, FormsModule], 
//   templateUrl: './task.html',
//   styleUrl: './task.scss',
// })
// export class Task implements OnInit { 
  
//   private ts = inject(TaskService); 
  
//   tasks: TaskInterface[] = []; 
  
//   newtask: TaskInterface = {
//     id: 0,
//     title: '',
//     description: '',
//     completed: '', 
//   };

//   ngOnInit() {
//     this.tasks = this.ts.getTasks(); 
//   }



//   OnDelete(id:number)
//   {
//     console.log("trying to delete data",id);
//     this.ts.deleteTask(id);
//   }

//   Edit(id:number)
//   {
//     const tasks=this.tasks.find(t=>t.id===id);
//     if(tasks)
//     {
//       this.newtask={...tasks};
//     }
//   }

//   SaveTask()
//   {
//     if(this.newtask.id===0)
//     {
//     const maxId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) : 0;
//     this.newtask.id = maxId + 1;
//     this.ts.addTask(this.newtask);

//     this.newtask = { id: 0, title: '', description: '', completed: 'false' };
//     this.tasks = this.ts.getTasks(); 
//     }
//     else
//     {
//       this.ts.updateTask(this.newtask.id,this.newtask);  
//       this.newtask = { id: 0, title: '', description: '', completed: 'false' };
//       this.tasks = this.ts.getTasks(); 
//     }
//   }


import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';
import { TaskInterface } from './task-interface';
import { TaskService } from './task-service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task implements OnInit {

  private ts = inject(TaskService);

  private cdr=inject(ChangeDetectorRef);


  tasks: TaskInterface[] = [];

  newtask: TaskInterface = {
    id:0,
    title: '',
    description: '',
    completed: ''
  };

  isEditMode = false;   

  ngOnInit() {
    this.loadTasks();
    console.log(this.tasks);
  }


  loadTasks() {
    this.ts.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.cdr.detectChanges();
        console.log(data);
      },
      error: (err) => {
        console.error('Error loading tasks', err);
      }
    });
  }

  SaveTask() {
    if (!this.isEditMode) {
      this.ts.addTask(this.newtask).subscribe({
        next: () => {
          this.loadTasks();
          this.resetForm();
        },
        error: (err) => {
          console.error('Error adding task', err);
        }
      });
    } 
    else {
      if (this.newtask.id !==0 && this.newtask.id !==undefined) {
        this.ts.updateTask(this.newtask.id, this.newtask).subscribe({
          next: () => {
            this.loadTasks();
            this.resetForm();
          },
          error: (err) => {
            console.error('Error updating task', err);
          }
        });
      }
    }
  }

  
  Edit(id: number | undefined) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      this.newtask = { ...task };   
      this.isEditMode = true;       
    }
  }

  
  OnDelete(id: number | undefined) {
    if (id === undefined){
      console.error("ID is undefined")
      return;
    }
    this.ts.deleteTask(id).subscribe({
      next: () => {
        this.loadTasks();
      },
      error: (err) => {
        console.error('Error deleting task', err);
      }
    });
  }

  resetForm() {
    this.newtask = {
      id:0,
      title: '',
      description: '',
      completed: ''
    };
    this.isEditMode = false;
  }
}

