import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    private taskService: TaskService,
    private toastService: ToastrService
  ) {

  }

  ngOnInit() {
    this.loadTask()
  }

  deleteTask(task) {
    event.stopPropagation()
    this.taskService.delete(task).subscribe((res) => {
      this.toastService.success('Feito!')
      this.loadTask()
    },(err)=>{
      this.toastService.error('Algo deu errado.')
      this.toastService.error(':(')
    })
  }

  deleteAll() {
    this.taskService.deleteAll().subscribe((res) => {

      this.toastService.success('Feito!')
      this.loadTask()
    },(err)=>{
      this.toastService.error('Algo deu errado.')
      this.toastService.error(':(')
    })
  }

  loadTask() {
    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res
    },(err)=>{
      this.toastService.error('Algo deu errado.')
      this.toastService.error(':(')
    })
  }

  clonseModal() {
    this.isModalOn = false
  }

  newTask() {
    let task = {
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

  save(task) {
    if (task.id) {
      this.taskService.updateTasks(task).subscribe((res) => {

        this.focus = null
        this.isModalOn = null
        this.loadTask()
        this.toastService.success('Feito!')
      },(err)=>{
        this.toastService.error('Algo deu errado.')
        this.toastService.error(':(')
      })
    } else {
      this.taskService.createTask(task).subscribe((res) => {

        this.focus = null
        this.isModalOn = null
        this.loadTask()
        this.toastService.success('Feito!')
      },(err)=>{
        this.toastService.error('Algo deu errado.')
        this.toastService.error(':(')
      })
    }


  }
}


