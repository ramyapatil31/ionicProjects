import { Component, OnInit } from '@angular/core';
import StudentService from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'list.student',
  templateUrl: './list.student.component.html',
  styleUrls: ['./list.student.component.scss'],
})
export class ListStudentComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {}

  students = this.studentService.getStudents();

  deleteStudent(student){
  	this.studentService.deleteStudent(student);
  	//this.studentService.getStudents();
  }
  
  editStudent(student){
   this.router.navigate(['/edit-student/'+student.rollno]);
  }
}
