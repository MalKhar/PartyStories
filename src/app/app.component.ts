import { Component } from '@angular/core';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';

  constructor(
   private taskService: TaskService
  ){

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.taskService.getTasks().subscribe((res)=>{
      console.log(res)
    })
  }
}


