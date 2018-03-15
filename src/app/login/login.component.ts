import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  public userData;
  public detailsMismatch = false;

  constructor(
    private router: Router,
    private http: Http) { }

  ngOnInit() {
    // localStorage.removeItem('userData');
  }

  login() {
    this.loading = true;
    this.detailsMismatch = false;
    this.http.get('assets/apis/users.json').subscribe(res => {
      this.userData = res.json();
      if (this.userData.username == this.model.username && this.userData.password == this.model.password) {
        console.log('Login Details matched')
        localStorage.setItem('localuserData', JSON.stringify(this.userData));
        // const localuserData = JSON.parse(localStorage.getItem('localuserData'));
        // console.log(localuserData)
      } else {
        this.detailsMismatch = true;
      }
      this.loading = false;
      //   this.router.navigate(['/']);
    })
  }
}
