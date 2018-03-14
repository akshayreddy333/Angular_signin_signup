import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  user: { username: string, pwd: string }
  LoginForm: FormGroup;

  ngOnInit() {
    this.LoginForm = this.fb.group({
      username: ['', [Validators.required]],
      pwd: ['', [Validators.required]]
    })
  }
  get username() { return this.LoginForm.get('username'); }

  get pwd() { return this.LoginForm.get('pwd'); }
  public onFormSubmit() {
    if (this.LoginForm.valid) {
      this.user = this.LoginForm.value;
      console.log(this.user.username);

      if ((this.user.username) == ('akshay') && (this.user.pwd) == ('akshay')) {
        console.log('Login Successful')
        this.router.navigate(['/console']);
      }
    }
  }
}
