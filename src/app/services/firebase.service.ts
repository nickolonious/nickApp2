import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable, AngularFire } from "angularfire2";
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;
  folder: any;
  
  constructor(private af: AngularFire) { 
    this.folder = '';
  }

  getListings() {
    this.listings = this.af.database.list('/listings') as FirebaseListObservable;
    return this.listings;
  }
}

interface Listing{
  image?: string;
}
  
