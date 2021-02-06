import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentItem = 'Television';
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  foo = 'Hello';
  bar = 'World';
  changeFn(e:any) {
    this.foo = e.target.value;
  }
  modelChangeFn(value:any) {
    this.bar = value;
  }

  birthday = new Date(1988, 3, 15);
  name="sarika"
  constructor() { }

  ngOnInit(): void {
  }

}
