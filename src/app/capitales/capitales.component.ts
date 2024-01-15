import { Component } from '@angular/core';
import { CapitalesService } from '../capitales.service';

@Component({
  selector: 'app-capitales',
  templateUrl: './capitales.component.html',
  styleUrl: './capitales.component.css'
})
export class CapitalesComponent {

  constructor(private capitalesService: CapitalesService) {
    this.capitales = capitalesService.getCities();
  }
  ngOnInit() {
    this.capitalesService.setCurrentComponent(1);
    console.log("currentcomponent: capitales");
    console.log(this.capitalesService.currentComponent);
  }

  capitales: any[];
  cityToEdit: any;
  cityToAdd: any;
  shouldEdit: boolean = false;
  shouldAdd: boolean = false;
  closingFeedback: any;

  editCity = (city: any) => {
    this.cityToEdit = city;
    this.shouldEdit = true;
    this.shouldAdd = false;
  }

  editCallbackCity =(city: any)=>{
    console.log("inside edit callback function",city);
    this.capitalesService.updateCity(city);
    this.capitales = this.capitalesService.getCities();
  }

  deleteCity(cityName: string) {
    this.capitales = this.capitales.filter(marker => marker.name !== cityName);
    this.capitalesService.deleteCity(cityName);
  }

  closeEditing = (feedback: string) => {
    if (feedback == "save") {
      this.capitales = this.capitalesService.getCities();
    }
    this.shouldEdit = false;
  }

  closeAdding = (feedback: string) => {
    if (feedback == "save") {
      this.closingFeedback = this.capitalesService.canAddfeedback;
      if (this.closingFeedback) {
        this.shouldAdd = false;
      } else {
        alert("Can't add this capital! it already exists");
      }
      this.capitales = this.capitalesService.getCities();
    }else{
      this.shouldAdd = false;
    }
  }

  addCallbackCity = (city: any) => {
    this.cityToAdd = city;
    if (this.cityToAdd != null) {
      this.capitalesService.addCity(this.cityToAdd);
    }
    this.capitales = this.capitalesService.getCities();
  }

  addCity() {
    this.shouldAdd = true;
    this.shouldEdit = false;
  }
}
