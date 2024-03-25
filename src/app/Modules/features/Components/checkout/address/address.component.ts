import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Route, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OrderService} from "../../../../../State/Order/order.service";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  constructor(private formBuilder : FormBuilder, private router: Router,
              private orderService: OrderService,private matSnackBar : MatSnackBar) {
  }
  addresses: any;
  orderWithAddressSubmitForm: FormGroup=this.formBuilder.group({
    firstName:["", Validators.required],
    lastName:["", Validators.required],
    mobile:["", Validators.required],
    email:[""],
    address:["", Validators.required],
    postCode:[""],
    district:["", Validators.required],

  });
  ngOnInit(){
    this.addresses = [1,1,1]
  }

  useLocation(item: any) {

  }

  handlePlaceOrder() {
    if(this.orderWithAddressSubmitForm.valid) {
      console.log(this.orderWithAddressSubmitForm.value);
      this.orderService.createOrder(this.orderWithAddressSubmitForm.value);
    }else{
      this.matSnackBar.open('Please Fill All * Field', 'Close', {
        duration: 2000, // Duration in milliseconds
        horizontalPosition: 'center', // Horizontal position: 'start', 'center', 'end', or 'left', 'right'
        verticalPosition: 'top', // Vertical position: 'top' or 'bottom'
      });
    }
  }

  checkIsRequired(formControlName: string) {
    return this.orderWithAddressSubmitForm.get(formControlName)?.hasValidator(Validators.required);
  }
}
