import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AuthComponent} from "../../../auth/auth.component";
import {UserService} from "../../../../State/User/user.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../Models/AppState";
import {userProfileActionLogout} from "../../../../State/User/user.action";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentSection: any;
  isNavBarContentOpen: boolean = false;
  userProfile: any = false;
  constructor(private router: Router, private matDialog: MatDialog, private userService: UserService, private store: Store<AppState>) {
  }
  ngOnInit(){
    if(localStorage.getItem("jwt"))
      this.userService.getUserProfileService()

    this.store.pipe(select((store) => store.user)).subscribe((user) =>{
      this.userProfile = user.userProfile;
      if(user.userProfile){
        this.matDialog.closeAll();
      }
    })

  }
  goToSelectCollection(section: string){
    this.isNavBarContentOpen = true;
    this.currentSection = section;
    // console.log(section);
  }
  closeNavSubBar(){
    this.isNavBarContentOpen = false;
  }
  goToOn(routLink : any){
    this.router.navigate([routLink]);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent){
    const modelContainer = document.querySelector(".modal-container");
    const navBarMainButton = document.querySelectorAll(".navbar-main-button")
    let isClickSubMenuButton = false;
    navBarMainButton.forEach((button:Element)=>{
      if(button.contains(event.target as Node))
        isClickSubMenuButton = true;
    })
    if(modelContainer && !isClickSubMenuButton && this.isNavBarContentOpen){
      this.closeNavSubBar();
    }
  }

  login(s: string) {
    this.matDialog.open(AuthComponent, {
      width: "400px",
      disableClose: false
    })

  }

  logout(s: string) {
    this.userService.logout("");

  }
}
