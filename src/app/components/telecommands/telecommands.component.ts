import { Component, OnInit } from '@angular/core';
// import { title } from 'process';
import { TelecommandService } from 'src/app/services/telecommand.service';
import { ListCommandsResponse, CommandInfo, ArgumentAssignmentInfo, ArgumentInfo} from '../../Telecommands' ; 
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';


@Component({
  selector: 'app-telecommands',
  templateUrl: './telecommands.component.html',
  styleUrls: ['./telecommands.component.css']
})
export class TelecommandsComponent implements OnInit {

  telecommands: ArgumentInfo[][] = [] ; 
  commands: CommandInfo[] = []; // telecommand tab
  // telecommand tab
  titles: String[] = [] ; 
  displayedCol: string[] = ['telecommands'] ; // , 'telemetry']
  num = 1 ; 
  complete = false ; 
  constructor(private telecommandService: TelecommandService) { }

  onClick(name: any){  
    for(let i= 0 ; i < this.commands.length; i++) {
      if(name == this.commands[i].name) {
        console.log(i) ;
        this.num = i  ; 
        
        
      }
    }
    console.log(name) ; 

  }

  number(){
    //console.log(this.commands[2].name) ; 
    return this.num 
  }
  ngOnInit(): void {
    // this.telecommandService.getAssigmentInfo().subscribe((info)=>
    // this.telecommands = info) ; 
    this.telecommandService.getTelecommandTable().subscribe((info)=>{
    //this.commands = this.commands.concat(info.commands)
    this.commands = [...this.commands, ...info.commands]

    for( let i =0 ; i < info.commands.length; i ++ ){
      this.telecommands.push(info.commands[i].argument) ;  
      
      //this.commands.push(info.commands[i]) ; 
      this.titles = this.titles.concat(info.commands[i].name) ; // this is not working for some reason 
      // console.log(info.commands[i].name); 
      // console.log(i) ; 
     // console.log(this.titles)
     //this.commands.push(info.commands[i])
     //this.commands = this.commands.concat(info.commands[i])
      //console.log(this.commands[i].name); 
      // console.log(this.titles)
    }}
    )
    // console.log(this.telecommands) ;  

    
    // this.telecommandService.getTelecommandTable().subscribe((info)=>{
    //   this.title.push(info.commands[2].qualifiedName) ; 
    // })
    // data = this.commands ; 
    // console.log(this.commands.length)
    // console.log('this is the name of the telecommand' + this.titles.length) ;  
    // console.log(this.commands[1].name); 
    // console.log(this.titles[1]); 
    //this.;telecommands = info.commands[2].argument )
   
  
  
  } 

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

}
