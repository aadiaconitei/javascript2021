import { Student } from './student';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ApiService {
  PHP_API_SERVER = 'http://localhost/javascript/curs10/apm-app/backend';
  constructor(private httpClient: HttpClient) {}

  createStudent(student: Student): Observable<Student>{
    return this.httpClient.post<Student>(`${this.PHP_API_SERVER}/api/create.php`, student);
  }
  readStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
  updateStudent(student: Student){
    return this.httpClient.put<Student>(`${this.PHP_API_SERVER}/api/update.php`, student);
  }
  deleteStudent(id: number){
    return this.httpClient.delete<Student>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }
}
