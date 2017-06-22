import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable, AngularFire } from "angularfire2";
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  folder: any;
  
  constructor(private af: AngularFire) { 
    this.folder = '';
  }
}

