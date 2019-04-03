import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {
  students = [];
  constructor() {  
     var defaultstudents = [
   {
     rollno:'1',firstName:'Ramya',lastName:'Patil',birthdate:'31-01-1995',class :'',subject:'Science',teacher:'abc',address:'India'
   },
   {
     rollno:'2',firstName:'Rashmi',lastName:'Upadhye',birthdate:'31-01-1995',class :'',subject:'Science',teacher:'abc',address:'India'
   }
  ];
  if(localStorage.getItem('students')==null){
    this.students = defaultstudents;
    
    localStorage.setItem('students',JSON.stringify(this.students));
  }
   else{
     this.students = JSON.parse(localStorage.getItem('students'));
   }
 }

  getStudents(){
  	return this.students;
  }

  /*setLocalStorageStudents(list){
   localStorage.setItem('students',JSON.stringify(list));
  }
  
  getLocalStorageStudents(){
    this.students = JSON.parse(localStorage.getItem('students'));
  }*/
  addStudent(student){
    student.rollno = Math.round(Math.random()*10000);  
  	this.students.push(student);
    localStorage.setItem('students',JSON.stringify(this.students));
  }

  deleteStudent(student){
  	for(var i=0;i<this.students.length;i++){
  		if(student.rollno==this.students[i].rollno){
  			this.students.splice(i,1);
        localStorage.setItem('students',JSON.stringify(this.students));
  		}
  	}
  }

  getStudentById(rollno){
    for(var i=0;i<this.students.length;i++){
    if(rollno==this.students[i].rollno){
      return this.students[i];
      break;
    }
  }
  return null;
  }
  
  updateStudent(student){
    for(var i=0;i<this.students.length;i++){
      if(student.rollno==this.students[i].rollno){
        this.students[i]=student;
      }
    }
    localStorage.setItem('students',JSON.stringify(this.students));
  }
}
