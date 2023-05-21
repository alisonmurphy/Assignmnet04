import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';


@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocationList: HousingLocation[] = [
  {
    id: 0,
    name: 'Gardening',
    city: 'Cork',
    state: '',
    photo: '/assets/gardenp.jpg',
    availableUnits: 4
  },
  {
    id: 1,
    name: 'Plumbing',
    city: 'Kerry',
    state: '',
    photo: '/assets/pb.jpg',
    availableUnits: 1,
    
  },
  {
    id: 2,
    name: 'Electrical',
    city: 'Cork City',
    state: '',
    photo: '/assets/el.jpg',
    availableUnits: 1,
    
  },
  {
    id: 3,
    name: 'Painting',
    city: 'Limerick',
    state: '',
    photo: '/assets/paint.jpg',
    availableUnits: 1,
   
  },
  {
    id: 4,
    name: 'Carpentry',
    city: 'Galway',
    state: '',
    photo: '/assets/car.jpg',
    availableUnits: 1,
    
  },
  {
    id: 5,
    name: 'Landscaping',
    city: 'Cork',
    state: '',
    photo: '/assets/land.jpg',
    availableUnits: 2,
    
  },
  {
    id: 6,
    name: 'Contractings',
    city: 'Galway',
    state: '',
    photo: '/assets/contr.jpg',
    availableUnits: 5,
    
  },
  
];
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application recieved: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
  constructor() { }
  
}
