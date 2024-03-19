import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() changeView: any;

  constructor(private formBuilder:FormBuilder, private store: Store) {
  }
  loginForm : FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password:["",[Validators.required, Validators.minLength(6)]]
  })
  submitLoginDetails(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }

  goToRegister() {

  }
}
