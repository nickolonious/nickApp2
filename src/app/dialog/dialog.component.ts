import { Component, OnInit, Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFire, FirebaseObjectObservable } from "angularfire2";
import { Router } from "@angular/router/src";
import { ActivatedRoute } from "@angular/router/router";
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;
  folder: any;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html' ,
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  id: any;
  listing: any;
  imageUrl: any;
    constructor (  
    ){ }
    
    ngOnInit(): void{
    }
}

