import { Component, OnInit } from '@angular/core';
// import { title } from 'process';
import { TelecommandService } from 'src/app/services/telecommand.service';
import { ListCommandsResponse, CommandInfo, ArgumentAssignmentInfo, ArgumentInfo} from '../../Telecommands' ; 


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

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
  
  constructor(private telecommandService: TelecommandService) { }

  number(){
    return 5 
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
       console.log(this.titles)
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
