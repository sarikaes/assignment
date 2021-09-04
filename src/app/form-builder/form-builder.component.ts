import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms'


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  profileForm = this.fb.group({
    fname: ['',[Validators.required,Validators.minLength(4)]],
    lname: [''],

    street: [''],


  });
  constructor(private fb: FormBuilder) { }
  get fname() { return this.profileForm.get('fname'); }


  onSubmit() {
    console.log(this.profileForm.value);

  }
  ngOnInit(): void {
  }

}
