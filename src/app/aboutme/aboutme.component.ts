import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material/";
import { DialogComponent } from "app/dialog/dialog.component";


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})

export class AboutmeComponent {
  
  constructor(public dialog: MdDialog) {}
  
  openDialog() {
    this.dialog.open(DialogComponent);
  } 
}

