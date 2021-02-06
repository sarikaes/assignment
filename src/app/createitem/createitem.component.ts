import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service'
import {Item} from '../item'

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreateitemComponent implements OnInit {

  public item:Item = {name:'',description:''};
 
  constructor(private _itemsService: ItemsService){}
 
 public getItem():Item{
     return this.item;
 }
 
 public addItem(){
     const currentItem:Item = {
         name:this.item.name,
         description:this.item.description
     };
 
    this._itemsService.addItem(currentItem);
    console.log("Item added")
 }

  ngOnInit(): void {
  }

}
