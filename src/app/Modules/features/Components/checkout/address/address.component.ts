import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  constructor(private formBuilder : FormBuilder, private router: Router) {
  }
  addresses: any;
  orderWithAddressSubmitForm: FormGroup=this.formBuilder.group({
    firstName:["", Validators.required],
    lastName:["", Validators.required],
    streetAddress:["", Validators.required],
    upozila:["", Validators.required],
    postal_Code:["", Validators.required],
    District:["", Validators.required],

  });
  ngOnInit(){
    this.addresses = [1,1,1]
  }

  useLocation(item: any) {

  }

  handlePlaceOrder() {
    console.log(this.orderWithAddressSubmitForm.value)
  }

  navigateToPlaceOrder() {
    this.router.navigate([""])
  }
}
