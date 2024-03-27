import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Route, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OrderService} from "../../../../../State/Order/order.service";
import {last} from "rxjs";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  addressId: any;
  constructor(private formBuilder : FormBuilder, private router: Router,
              private orderService: OrderService,private matSnackBar : MatSnackBar) {
  }
  @Input() addresses: any;
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
    console.log("from address component: " + this.addresses);
  }

  useLocation(item: any) {
    // // @ts-ignore
    // this.orderWithAddressSubmitForm.get('firstName').setValue(item.firstName);
    // // @ts-ignore
    // this.orderWithAddressSubmitForm.get('lastName').setValue(item.lastName);
    // // @ts-ignore
    // this.orderWithAddressSubmitForm.get('mobile').setValue(item.mobile);
    // // @ts-ignore
    // this.orderWithAddressSubmitForm.get('address').setValue(item.address);
    // // @ts-ignore
    // this.orderWithAddressSubmitForm.get('postCode').setValue(item.postCode ? item.postCode : "");
    // // @ts-ignore
    // this.orderWithAddressSubmitForm.get('district').setValue(item.district);

    this.orderService.createOrder(item);

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
