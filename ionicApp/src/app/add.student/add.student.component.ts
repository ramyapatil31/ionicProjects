import { Component, OnInit } from '@angular/core';
import StudentService from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add.student',
  templateUrl: './add.student.component.html',
  styleUrls: ['./add.student.component.scss'],
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService: StudentService, private router:Router) { }
  
  student={ rollno:'', firstName:'', lastName:'', birthdate:'', class:'', subject:'', teacher:'', address:''}


  ngOnInit() {}

  addStudent(student){
  	this.studentService.addStudent(student);
  	this.router.navigate(['/list-student']);
  }
}