import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { IChangelog } from './changelog';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {
changelog: FirebaseListObservable<IChangelog[]>;
changeLogList: IChangelog[]
  constructor(private af: AngularFire) { 

  this.changelog = af.database.list('/Changelog', {
  }).map((array) => array.reverse()) as FirebaseListObservable<IChangelog[]>;
  this.changelog.forEach(logs => {
    for(let log of logs) {
    
    //finish tomorrow
    let timePassed = new Date(log.date);

    this.changeLogList = logs;

    };
  })
  
}

  ngOnInit() {
  }

}
