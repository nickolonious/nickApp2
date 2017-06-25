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
    
    let todaysDate = new Date();
    let dateOfPost = new Date(log.date);

    log.postAge = todaysDate.getFullYear() - dateOfPost.getFullYear(); 

    if(log.postAge < 1){
      log.postAge = todaysDate.getMonth() - dateOfPost.getMonth();
      log.postAgeString = log.postAge + " months ago";
      if(log.postAge < 1) {
        log.postAge = todaysDate.getDate() - dateOfPost.getDate();
        log.postAgeString = log.postAge + " days ago";
        if(log.postAge < 1) {
          log.postAge = todaysDate.getHours() - dateOfPost.getHours();
          log.postAgeString = log.postAge + " hours ago";
          if(log.postAge < 1) {
            log.postAge = todaysDate.getMinutes() - dateOfPost.getMinutes();
            log.postAgeString = log.postAge + " minutes ago";
            if(log.postAge < 1) {
              log.postAge = todaysDate.getSeconds() - dateOfPost.getSeconds();
              log.postAgeString = log.postAge + " seconds ago";
            }
          }
        }
      }
    } else {
      log.postAgeString = log.postAge + " years ago";
    } 
    this.changeLogList = logs;

    };
  })
}

  ngOnInit() {
  }

}
