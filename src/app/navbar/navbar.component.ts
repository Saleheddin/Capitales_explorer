import { Component, Input, SimpleChanges, ElementRef, Renderer2 } from '@angular/core';
import { CapitalesService } from '../capitales.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() activeLink: any;
  constructor(private capitalesService: CapitalesService, private renderer: Renderer2, private el: ElementRef) {
    this.activeLink = this.capitalesService.currentComponent;
  }
  isNavOpen: boolean = false;

  getCurrentPageIndex() {
    this.activeLink = this.capitalesService.currentComponent;
    //this will hide the burger menu when a link is clicked[ux]
    this.toggleNav();
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    console.log("toggle navigation", this.isNavOpen);
  }
}
