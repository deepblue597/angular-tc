import { Component, Input, OnInit } from '@angular/core';
import { ArgumentAssignmentInfo, ArgumentInfo, CommandInfo } from '../../Telecommands' ; 
import { ListCommandsResponse} from '../../Telecommands' ; 
import { TelecommandService } from 'src/app/services/telecommand.service';

@Component({
  selector: 'app-telecommand-item',
  templateUrl: './telecommand-item.component.html',
  styleUrls: ['./telecommand-item.component.css']
})
export class TelecommandItemComponent implements OnInit {

  options: String[] = ['Temperature 1' , 'Status temperature' , 'temperature 2' ] ; 
  @Input() telecommand: ArgumentInfo | undefined;
  constructor() {} 

  ngOnInit(): void {
    // console.log(this.telecommand?.name) ; 

  }
  // telecommands : ArgumentAssignmentInfo[] = [] ; 
  // constructor(private telecommandService: TelecommandService) { }

  // ngOnInit(): void {
  //   this.telecommandService.getTelecommandTable().subscribe((commands) =>
  //   this.telecommands = commands.commands[0].argumentAssignment ) ; 
  // }

}
