import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service'

@Component({
  selector: 'app-viewcomponent',
  templateUrl: './viewcomponent.component.html',
  styleUrls: ['./viewcomponent.component.css']
})
export class ViewcomponentComponent implements OnInit {

  constructor(private  _itemsService: ItemsService) {}
   public printItems(){
      console.log('items in warehouse:');
      console.log(this._itemsService.getItems());
   }
   

  ngOnInit(): void {
  }

}
