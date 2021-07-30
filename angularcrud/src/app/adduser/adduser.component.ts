import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  registerForm: any;
  submitted: boolean = false;


  constructor(private crudService: CrudService, private formBuilder: FormBuilder, private router: Router) { }

  //add user form actions
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    if(this.submitted){
      var myFormData = new FormData();

      myFormData.append(
        'myUserName', this.registerForm.value.firstname);
      myFormData.append(
        'myEmail', this.registerForm.value.email);

      this.crudService.addUser(myFormData);
      this.router.navigate(['/users']);
    }

  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]]
    })
  }

}
