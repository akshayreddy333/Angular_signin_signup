import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public register(model) {
    // console.log("registration is going on");
    console.log(model);
    // console.log(model.username);

  }

  private buildForm(): void {
    this.registerForm = this._formBuilder.group({

      'firstname': ['', [Validators.required]],
      'lastname': [''],
      'email': ['', [Validators.required, Validators.email]],
      'username': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      'password': [null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]]
    });

    this.registerForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  private onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  validationMessages = {

    'firstname': {
      'required': 'First Name is required.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Enter valid email'
    },
    'username': {
      'required': 'UserName is required.',
      'minlength': 'UserName must be at least 4 characters long.',
      'maxlength': 'UserName cannot be more than 20 characters long.'
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 24 characters long.'
    }
  }

  formErrors = {
    'password': '',
    'firstname': '',
    'email': '',
    'username': ''
  };

  signin() {
    this.router.navigate(['login']);
  }


}
