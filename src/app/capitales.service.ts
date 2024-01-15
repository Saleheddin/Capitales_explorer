import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapitalesService {
  private storageKey = 'Capitales';
  cities:any[] = [
    { lat: 40.416775, lng: -3.703790, name: 'Madrid', population: 3223334 },   // Madrid, Spain
    { lat: 48.856613, lng: 2.352222, name: 'Paris', population: 2140526 },     // Paris, France
    { lat: 38.736946, lng: -9.142685, name: 'Lisbon', population: 505526 },    // Lisbon, Portugal
    { lat: 52.520008, lng: 13.404954, name: 'Berlin', population: 3748148 },   // Berlin, Germany
    { lat: 50.850346, lng: 4.351721, name: 'Brussels', population: 185103 },   // Brussels, Belgium
    { lat: 52.367573, lng: 4.904138, name: 'Amsterdam', population: 821752 }   // Amsterdam, Netherlands
  ];

  upToDateCapitals:any[]=[];
  currentComponent:any;
  canAddfeedback:any;
  setCurrentComponent(index:any){
    this.currentComponent = index;
  }
  ngOnInit(): void {
    // This code will run once, when the component is first created
    // You can set local storage or perform other initialization here
    localStorage.setItem(this.storageKey, JSON.stringify(this.cities));
  }

  getCities() {
    const storedCities = localStorage.getItem(this.storageKey);
    const capitales = storedCities ? JSON.parse(storedCities) : [];
    return capitales;
  }

  private saveToLocalStorage(upToDateCapitales:any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(upToDateCapitales));
  }

  addCity(newCity: { lat: number, lng: number, name: string, population: number }) {
    this.upToDateCapitals = this.getCities();
    if(newCity.name!='' && !this.upToDateCapitals.find(c => (c.name as string).toLowerCase() === newCity.name.toLowerCase())){
      this.upToDateCapitals.push(newCity);
      this.saveToLocalStorage(this.upToDateCapitals);
      this.canAddfeedback = true;
    }else{
      this.canAddfeedback = false;
    }
    
  }

  updateCity(updatedCity: { lat: number, lng: number, name: string, population: number }) {
    // Mettre à jour la ville dans la liste
    this.upToDateCapitals = this.getCities();
    let indexCity = this.upToDateCapitals.findIndex(c => c.name === updatedCity.name);
    if (indexCity !== -1) {
      // Update the properties of the city directly within the array
      this.upToDateCapitals[indexCity].lat = updatedCity.lat;
      this.upToDateCapitals[indexCity].lng = updatedCity.lng;
      this.upToDateCapitals[indexCity].population = updatedCity.population;
      // Save to local storage
      this.saveToLocalStorage(this.upToDateCapitals);
    }
  }

  deleteCity(cityName: string) {
    // Supprimer la ville de la liste
    this.upToDateCapitals = this.getCities();
    this.upToDateCapitals = this.upToDateCapitals.filter(marker => marker.name !== cityName);
    this.saveToLocalStorage(this.upToDateCapitals);
  }
}
