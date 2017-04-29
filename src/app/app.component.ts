import { Component } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DialogComponent } from "app/dialog/dialog.component";
import { MdDialog } from "@angular/material/";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'Nick works, for money...';  

  constructor(public dialog: MdDialog) {}
  
  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
 