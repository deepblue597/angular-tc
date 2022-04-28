import { Component, OnInit } from '@angular/core';
import { TelecommandService } from 'src/app/services/telecommand.service';
import { ListCommandsResponse, CommandInfo, ArgumentAssignmentInfo, ArgumentInfo} from '../../Telecommands' ; 

@Component({
  selector: 'app-telecommands',
  templateUrl: './telecommands.component.html',
  styleUrls: ['./telecommands.component.css']
})
export class TelecommandsComponent implements OnInit {

  telecommands: ArgumentInfo[] = [] ; 
  commands: CommandInfo[] = [] ;  // telecommand tab
  
  constructor(private telecommandService: TelecommandService) { }

  ngOnInit(): void {
    // this.telecommandService.getAssigmentInfo().subscribe((info)=>
    // this.telecommands = info) ; 
    this.telecommandService.getTelecommandTable().subscribe((info)=>
    this.telecommands = info.commands[2].argument )
  }

}
