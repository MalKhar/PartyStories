import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  create(task: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http:  HttpClient
  ) { }

  getTasks(){
    return this.http.get('http://localhost:8080/api/tasks/')
  }

  updateTasks(task){
    return this.http.put(`http://localhost:8080/api/tasks/${task.id}`, task)
  }

  createTask(task){
    return this.http.post(`https://task-back-cd6t9gg3c-chainachaina.vercel.app/api/tasks`,task)
  }

  deleteAll(){
    return this.http.delete(`http://localhost:8080/api/tasks/`)
  }

  delete(task){
    return this.http.delete(`http://localhost:8080/api/tasks/${task.id}`)
  }
}
