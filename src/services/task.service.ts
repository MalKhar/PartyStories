import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http:  HttpClient
  ) { }

  getTasks(){
    return this.http.get('localhost:8080/api/tasks/')
  }
}