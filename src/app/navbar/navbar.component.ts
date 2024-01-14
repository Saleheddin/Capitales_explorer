import { Component, Input, SimpleChanges} from '@angular/core';
import { CapitalesService } from '../capitales.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activeLink:any ;
  constructor(private capitalesService: CapitalesService){
    this.activeLink = this.capitalesService.currentComponent;
  }

  getCurrentPageIndex() {
    this.activeLink = this.capitalesService.currentComponent;
  }

}
