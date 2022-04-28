import { Component, OnInit } from '@angular/core';
import { TelecommandService } from 'src/app/services/telecommand.service';
import { ListCommandsResponse, CommandInfo, ArgumentAssignmentInfo, ArgumentInfo} from '../../Telecommands' ; 

@Component({
  selector: 'app-telecommands',
  templateUrl: './telecommands.component.html',
  styleUrls: ['./telecommands.component.css']
})
export class TelecommandsComponent implements OnInit {

  telecommands: ArgumentInfo[][] = [] ; 
  commands: CommandInfo[] = [] ;  // telecommand tab
  titles: String[] = [] ; 
  
  constructor(private telecommandService: TelecommandService) { }

  ngOnInit(): void {
    // this.telecommandService.getAssigmentInfo().subscribe((info)=>
    // this.telecommands = info) ; 
    this.telecommandService.getTelecommandTable().subscribe((info)=>{
    for( let i =0 ; i < info.commands.length; i ++ ){
      this.telecommands.push(info.commands[i].argument) ;  
      this.titles.push(info.commands[i].name) ; // this is not working for some reason 
      console.log(info.commands[i].name); 
      console.log(i) ; 
       
    }}
    );
    // console.log(this.telecommands) ;  

    
    // this.telecommandService.getTelecommandTable().subscribe((info)=>{
    //   this.title.push(info.commands[2].qualifiedName) ; 
    // })
    this.titles.push('hello') ;
    console.log('this is the name of the telecommand' + this.titles) 
    //this.telecommands = info.commands[2].argument )
  }

}
