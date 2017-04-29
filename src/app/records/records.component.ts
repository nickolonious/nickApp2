import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})

export class RecordsComponent implements OnInit {
  
records: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.records = af.database.list('/DadsVinyl');
    console.log(this.records);
  }

  ngOnInit() {
  
  }
}
