import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material/";
import { DialogComponent } from "app/dialog/dialog.component";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { IEducation } from "app/aboutme/education";
import "rxjs/add/operator/map";



@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})

export class AboutmeComponent {
  education: FirebaseObjectObservable<IEducation[]>;  
  degrees: any;
  constructor(
    private af: AngularFire,
    public dialog: MdDialog 
    ) {

    this.education = af.database.object('/Education');
  
    this.education.first().subscribe(snapshot => {
     
    this.degrees = snapshot;
    
    return this.degrees;
    });
    

    }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  } 
}

