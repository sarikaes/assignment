import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  profileForm = this.fb.group({
    fname: ['',[ Validators.required]],
    lname: [''],
    street:[''],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  get fname() { return this.profileForm.get('fname'); }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  constructor(private fb: FormBuilder) { }
  onSubmit(){
    console.log(this.profileForm.value)
  }

  ngOnInit(): void {
  }

}
