import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public eemployees:any = []
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getemployee()
      .subscribe(data => this.eemployees = data)
  }

}
