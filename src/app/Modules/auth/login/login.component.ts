import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AuthService} from "../../../State/Auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() changeView: any;

  constructor(private formBuilder:FormBuilder, private store: Store, private authService : AuthService) {
  }
  loginForm : FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password:["",[Validators.required, Validators.minLength(6)]]
  })
  submitLoginDetails(){
    if(this.loginForm.valid){
      this.authService.loginService(this.loginForm.value);
      console.log(this.loginForm.value)
    }
  }

  goToRegister() {

  }
}
