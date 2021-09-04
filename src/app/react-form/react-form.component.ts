import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  userForm=new FormGroup({
  fname :new FormControl('',[Validators.required,Validators.minLength(4)]),
  lname:new FormControl(''),
  street:new FormControl('')
  })  
  // name: any;

  // updateName() {
  //   this.name.setValue('Sarika');
  // }
  get fname() { return this.userForm.get('fname'); }
  onSubmit() {
    console.log(this.userForm.value);
  }
  updateProfile() {
    this.userForm.patchValue({
      fname: 'Sarika',
      lname:'es',
        street: 'Abc street'
      
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
