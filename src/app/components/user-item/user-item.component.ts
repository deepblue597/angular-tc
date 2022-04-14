import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../User' ; 

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User | undefined ;  // if i understood correctly it is used in order to Input the data 

  
  constructor() { }
  
  
  ngOnInit(): void {
    console.log(this.user?.telephone[0].cellphone ) ; 
  }
  
  
}
