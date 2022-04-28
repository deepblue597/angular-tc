import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' ; 
import { Observable, of } from 'rxjs'; 
import { ArgumentAssignmentInfo, CommandInfo } from '../Telecommands' ; 
import { ListCommandsResponse} from '../Telecommands' ;

@Injectable({
  providedIn: 'root'
})
export class TelecommandService {
  private apiUrl= 'http://localhost:8090/api/mdb/myproject/commands' ;
  constructor(private http:HttpClient) {}   //with this we should be able to use http and all the methods we need 

  // getUsers(): Observable<User[]>{
  //   return this.http.get<User[]>(this.apiUrl) ;  
  // }
  getTelecommands() : Observable<CommandInfo[]> {
    return this.http.get<CommandInfo[]>(this.apiUrl)  ; 
  } 

  getTelecommandTable() : Observable<ListCommandsResponse> {
    return this.http.get<ListCommandsResponse>(this.apiUrl)  ; 
  } 
  getAssigmentInfo(): Observable<ArgumentAssignmentInfo[]>{
    return this.http.get<ArgumentAssignmentInfo[]>(this.apiUrl) ; 
    
  }
}

