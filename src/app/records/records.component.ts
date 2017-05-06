import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { IRecord } from "./record";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})

export class RecordsComponent implements OnInit {
 public listFilter: string; 
 public records: FirebaseListObservable<IRecord[]>;

  constructor(private af: AngularFire) {
  
  this.records =  af.database.list('/DadsVinyl');
 
  this.af.database.list('/DadsVinyl', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          console.log(snapshot.key, snapshot.val());
        });
    })    

  console.log(this.records);
}

  ngOnInit() {
  
  }
}
