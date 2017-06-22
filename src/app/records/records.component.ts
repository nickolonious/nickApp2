import { Component, OnInit, Pipe, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { IRecord } from "./record";
import { RecordSearchPipe } from "./record-search.pipe";
import { SearchBox } from "./search-box";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})

export class RecordsComponent implements OnInit {
 public listFilter: string; 
 public records: FirebaseListObservable<IRecord[]>;
 fallBackImage: string; 
 public recordsList: IRecord[];
 @Input() term;
  
  constructor(
    private af: AngularFire,
  
  ) {
  
  this.records =  af.database.list('/DadsVinyl');
  this.fallBackImage =  'http://www.diamond-cutting-stylus.com/s/cc_images/cache_2438499211.jpg?t=1369689975';

  this.records.forEach(records => {
    for(let record of records) {
      if(record.image === undefined) {
        record.image = this.fallBackImage;
      }
    }  
      this.recordsList = records;
  });
}

  @Output() update = new EventEmitter();


  ngOnInit() {
    this.update.emit('');
  }
}
