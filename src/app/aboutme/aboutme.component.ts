import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material/";
import { DialogComponent } from "app/dialog/dialog.component";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { IEducation } from "app/aboutme/education";


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})

export class AboutmeComponent {
  education: FirebaseObjectObservable<IEducation[]>;  
  degrees: IEducation[];
  constructor(
    private af: AngularFire,
    public dialog: MdDialog 
    ) {

  
  this.education = af.database.object('/Education');


  this.education
  .subscribe(snapshot =>{
    this.degrees = snapshot;
  });


}

ngOnInit(): void {
  
}

  openDialog() {
    this.dialog.open(DialogComponent);
  } 
}

