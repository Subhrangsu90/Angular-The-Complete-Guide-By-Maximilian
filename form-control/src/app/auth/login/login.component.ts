import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('',{
      validators: [ Validators.email,Validators.required]
    }),
    password: new FormControl('',{
      validators: [Validators.required, Validators.minLength(6),Validators.]
    }),
  });

  onSubmit() {
    console.log(this.form.value);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(enteredEmail, enteredPassword);
  }
}
