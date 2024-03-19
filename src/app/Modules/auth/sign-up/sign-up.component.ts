import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  @Input() isRegister:any;
  @Input() changeView:any;
  constructor(private formBuilder:FormBuilder, private store: Store) {
  }
  signUpForm : FormGroup = this.formBuilder.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password:["",[Validators.required, Validators.minLength(6)]]
  })

  submitSignUpDetails() {
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);
    }
  }
}
