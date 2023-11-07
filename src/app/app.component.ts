import { Component } from '@angular/core';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  tasks
  focus
  isModalOn


  constructor(
    private taskService: TaskService
  ) {

  }

  ngOnInit() {
    this.loadTask()
  }

  deleteTask(task){
    this.taskService.delete(task).subscribe((res)=>{
      console.log(res)
      this.loadTask()
    })

  }

  loadTask() {
    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res
    })
  }

  clonseModal(){
    this.isModalOn = false
  }

  newTask(){
    let task ={
      title: '',
      descrption: '',
      id: null
    }
    this.openModal(task)
  }

  openModal(task) {
    this.focus = task
    this.isModalOn = true
  }

  save(task){
    if (task.id) {
      this.taskService.updateTasks(task).subscribe((res) => {
        console.log(res)
        this.focus = null
        this.isModalOn = null
        this.loadTask()
      })
    }else{
      this.taskService.createTask(task).subscribe((res) => {
        console.log(res)
        this.focus = null
        this.isModalOn = null
        this.loadTask()
      })
    }
    
    
  }
}


