import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespClients } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  userData: any;
  constructor(private http: HttpClient) { }
  //get users
  public getUsers() {
    return this.http.get<RespClients[]>('http://localhost/crud/users.php');
  }
  //add user
  public addUser(userData: any) {
    return this.http.post('http://localhost/crud/users.php', userData)
            .subscribe(resp => {
              this.getUsers();
            })
  }
}
