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
  name
  text
  done
  check = 0
  loading: boolean;


  constructor(
    private taskService: TaskService,
    private toastService: ToastrService
  ) {

  }

  ngOnInit() {
  }

  save() {
    this.check ++
    this.loading = true
    let task = {
      title: this.name,
      description: this.text
    }
    this.taskService.createTask(task).subscribe((res) => {
      this.loading = false
      this.done = 'Mensagem enviada!'
    },(err)=>{
      this.loading = false
      this.done = 'ALGO DEU ERRADO, TENTA DE NOVO'
    })
  }

}


