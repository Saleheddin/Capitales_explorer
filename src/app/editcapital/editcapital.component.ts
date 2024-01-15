import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editcapital',
  templateUrl: './editcapital.component.html',
  styleUrl: './editcapital.component.css'
})
export class EditcapitalComponent {

  @Input() cityToEdit: any;
  @Input() editCallbackFunction:any;
  @Input() addCallbackFunction:any;
  @Input() closeEditcomp: any;
  @Input() closeAddcomp: any;
  @Input() shouldEdit: any;
  @Input() shouldAdd: any;
  addedCity:any = { lat: 0, lng: 0, name: '', population: 0 };
  editedCity:any = { lat: 0, lng: 0, name: '', population: 0 };

  ngOnInit(){
    console.log("edit component mounted");
    console.log("should add ? ",this.shouldAdd);
    console.log("city to edit ? ",this.cityToEdit);
    this.getCityToEdit();
  }

  // this function is to avoid having the updates directly on the table(cityToEdit)
  getCityToEdit(){
    if (this.cityToEdit) {
      this.editedCity.name = this.cityToEdit.name;
      this.editedCity.population = this.cityToEdit.population;
      this.editedCity.lng = this.cityToEdit.lng;
      this.editedCity.lat = this.cityToEdit.lat;
    } else {
      console.warn("City to edit is undefined");
    }
  }

  handleChangeName(event: any) {
    this.addedCity.name = event.target.value; 
  }

  handleChangePopulation(event: any){
    if(this.shouldAdd){
      this.addedCity.population = event.target.value;
    }else if(this.shouldEdit){
      this.editedCity.population = event.target.value;
    }
  }

  handleChangeLongitude(event: any){
    
    if(this.shouldAdd){
      this.addedCity.lng = event.target.value as number;
    }else if(this.shouldEdit){
      this.editedCity.lng = event.target.value;
    }
  }

  handleChangelatitude(event: any){
    if(this.shouldAdd){
      this.addedCity.lat = event.target.value as number;
    }else if(this.shouldEdit){
      this.editedCity.lat = event.target.value; 
    }
  }

  saveCapital(){
    if(this.shouldAdd){
      console.log("adding the city : ",this.addedCity)
      const cityToAdd = this.addedCity;
      this.addCallbackFunction(cityToAdd);
      //close the addcomponent
      this.closeAddcomp("save");
      // this added city should reset when the city is already added to the localStorge
    }else if(this.shouldEdit){
      console.log("saving the city : ",this.editedCity);
      // we get the updated city
      const editedCity = this.editedCity;
      this.editCallbackFunction(editedCity);
      //close the editcomponent
      this.closeEditcomp('save');
    }
    this.addedCity = { lat: 0, lng: 0, name: '', population: 0 };
  }

  cancel(){
    alert("Do you want to cancel your changes?");
    this.closeEditcomp("cancel");
    this.closeAddcomp("cancel");
  }
}
