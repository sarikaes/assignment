import { Component, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Input() item: any
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  a1="Hai"
  num=4
  num1=5
  a2="hello"
  constructor() { }

  ngOnInit(): void {
  }

}
