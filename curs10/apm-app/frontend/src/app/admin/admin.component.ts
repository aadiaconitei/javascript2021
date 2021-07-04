import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  students: Student[];
  selectedStudent: Student  = { id : null, nume: null, prenume: null, an: null};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // read
    this.apiService.readStudents().subscribe((students: Student[]) => {
      this.students = students;
      console.log(this.students);
    });
  }


  createOrUpdateStudent(form){
    if ( this.selectedStudent && this.selectedStudent.id ) {
      this.apiService.updateStudent(form.value).subscribe((student: Student) => {
        console.log('Student updated' , student);
      });
    }
    else{

      this.apiService.createStudent(form.value).subscribe((student: Student) => {
        console.log('Student created, ', student);
      });
    }

  }

  selectStudent(student: Student){
    this.selectedStudent = student;
  }


  
  deleteStudent(id){
    this.apiService.deleteStudent(id).subscribe((student: Student) => {
      console.log('Student deleted, ', student);
      const index = this.students.indexOf(student);
      this.students.splice(index, 1);
    });
  }

}
