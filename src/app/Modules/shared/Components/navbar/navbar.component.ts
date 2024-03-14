import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLogIn = true;
  currentSection: any;
  isNavBarContentOpen: boolean = false;
  constructor(private router: Router) {
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

}
