import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {
  user = { username: "user@gmail.com", password: "123456" };
  admin = { username: "admin@gmail.com", password: "123456" };
  selectedRoleIndex: number = 0;
  userRoles: any[];
  myForm: FormGroup;
  usernameController: FormControl;
  password: FormControl;
  userController: FormControl;
  constructor() {
    this.userRoles = [{ id: 0, role: "Vegetable Seller" }, { id: 1, role: "Customer" }];
    this.usernameController = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', Validators.required);
    this.userController = new FormControl('', Validators.required);
    this.myForm = new FormGroup(
      {
        username: this.usernameController,
        password: this.password,
        user :this.userController
      }
    );
  }
  login(username: string, password: string) {
    if (this.selectedRoleIndex && this.user.username === username
      && this.user.password === password) {
      console.log(`${username} ${password} User login succesful`);
    }
    else if (this.selectedRoleIndex === 0 && this.admin.username === username
      && this.admin.password === password) {
      console.log(`${username} ${password} Admin login succesful`);
    }
    else {
      console.log(`Login unsuccesful ${this.selectedRoleIndex}`);
      this.password.reset();
    }
  }
}