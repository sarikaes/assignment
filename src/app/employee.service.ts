import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EEmployee } from 'src/assets/data/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string="/assets/data/employe.json"
  constructor(private http:HttpClient) { }
  getemployee():Observable<EEmployee[]>{
    return this.http.get<EEmployee[]>(this.url)
  }
}
