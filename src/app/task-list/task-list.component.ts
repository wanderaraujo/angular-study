import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {

  tasks = [];
  task = "";
  isAdmin: boolean = true;
  profile:  number = 2;
  add():void{
    this.tasks.push(this.task);
    this.task = "";
  }

}
