import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from './custom-class/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
  registerForm!: FormGroup;
  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmPassword: ['', Validators.required],
      acceptTandC: [false, Validators.requiredTrue]
    }, {
      Validators: PasswordChecker('password', 'confirmPassword')
    })
  }

  onRest() {
    this.submitted = false;
    this.registerForm.reset();
  }
  onSubmit() {
    this.submitted = true;
    console.log("the entered form values", this.registerForm.value)
  }
  get h() {
    return this.registerForm.controls;
  }
}
