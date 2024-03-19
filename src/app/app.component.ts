import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {UserService} from "./State/User/user.service";
import {AppState} from "./Models/AppState";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ecomarce-handicraft-frontend';

  constructor(private userService: UserService, private store: Store<AppState>) {
  }
  ngOnInit(){
    if(localStorage.getItem("jwt"))
      this.userService.getUserProfileService();

    this.store.pipe(select((store) => store.auth)).subscribe((user) =>{
      this.userService.getUserProfileService();
      console.log("store data: " + this.store)
    })

  }
}
