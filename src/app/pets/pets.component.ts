import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IPet } from './pet';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})

export class PetsComponent implements OnInit {
  pets: FirebaseListObservable<IPet[]>;
  petList: IPet[];
  constructor(private af: AngularFire) { 
    
    this.pets = af.database.list('/pets', {
    }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;

    this.pets.forEach(pets => {
      for(let pet of pets) {
        let todaysDate = new Date();
        let dateOfBirth = new Date(pet.dob);

        pet.age = todaysDate.getFullYear() - dateOfBirth.getFullYear();
        
        if(pet.age < 1) {
          pet.age = todaysDate.getMonth() - dateOfBirth.getMonth();
          pet.ageString = pet.name + " is " + pet.age + " months old";
        }
        else{
          pet.ageString = pet.name + " is " + pet.age + " years old";
        }        
        this.petList = pets;
      }
    })
  }

  ngOnInit() {
  }

}
