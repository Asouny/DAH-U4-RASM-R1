import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Estudiante } from "../../models/estudiante";
import { StudentService } from "../../services/student.service";

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {
  public myForm:FormGroup;
  public student:Estudiante;
  constructor(private studentService:StudentService, private fb:FormBuilder) { }

  ngOnInit() {
this.initializeForm();
  }

  create(){
    this.student = {
      name: this.myForm.controls.name.value,
      controlnumber: this.myForm.controls.controlnumber.value,
      age: this.myForm.controls.age.value,
      curp: this.myForm.controls.curp.value,
      active: this.myForm.controls.active.value
    }
    this.studentService.createStudent(this.student);
  }

  initializeForm(): void {
    this.myForm = this.fb.group(
      {
        name:['',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
        controlnumber: ['',Validators.compose([Validators.required, Validators.pattern('^[0-9]{2}[0-9]{8}$')])],
        age: ['',Validators.compose([Validators.required])],
        curp: ['', Validators.compose([Validators.required,
            Validators.pattern('[A-Z]{4}[0-9]{6}[H,M][A-Z]{5}[0-9]{2}')])],
        active: ['', Validators.compose([Validators.required])],
          });
  }




}
