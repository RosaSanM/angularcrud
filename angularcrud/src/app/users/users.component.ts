import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { RespClients } from '../Models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data: RespClients[];

  constructor(private crudService: CrudService) {
    this.data = [];

    this.crudService.getUsers()
      .subscribe((resp: RespClients[])=>{
        this.data = resp;
      })
   }

  ngOnInit(): void {
  }

}
