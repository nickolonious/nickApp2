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
  });
  this.changelog.forEach(logs => {
    for(let log of logs) {
    
    let todaysDate = new Date();
    let dateOfPost = new Date(log.date);

    log.postAge = todaysDate.getFullYear() - dateOfPost.getFullYear(); 

    if(log.postAge < 1){
      log.postAge = todaysDate.getMonth() - dateOfPost.getMonth();
      if(log.postAge === 1) {
        log.postAgeString = log.postAge + " month ago";
      }
      else if (log.postAge > 1) {
        log.postAgeString = log.postAge + " months ago";
      }
      else if(log.postAge < 1) {
        log.postAge = todaysDate.getDate() - dateOfPost.getDate();
        if(log.postAge === 1) {
          log.postAgeString = log.postAge + " day ago";
        }
        else if(log.postAge > 1) {
          log.postAgeString = log.postAge + " days ago";
        }
        else if(log.postAge < 1) {
          log.postAge = todaysDate.getHours() - dateOfPost.getHours();
          if(log.postAge > 1) {
            log.postAgeString = log.postAge + " hours ago";
          }
          else if(log.postAge === 1) {
            log.postAgeString = log.postAge + " hour ago";
          }
          else if(log.postAge < 1) {
            log.postAge = todaysDate.getMinutes() - dateOfPost.getMinutes();
            if(log.postAge > 1) {
              log.postAgeString = log.postAge + " minutes ago";
            }
            else if(log.postAge === 1) {
              log.postAgeString = log.postAge + " minute ago";
            }
            if(log.postAge < 1) {
              log.postAge = todaysDate.getSeconds() - dateOfPost.getSeconds();
              if(log.postAge === 1) {
                log.postAgeString = log.postAge + " second ago";
              }
              else {
                log.postAgeString = log.postAge + " seconds ago";
              }
            }
          }
        }
      }
    } else {     
      log.postAgeString = (todaysDate.getFullYear() - dateOfPost.getFullYear()).toString(); 
    } 
    this.changeLogList = logs;
    };
  })
}

  ngOnInit() {
  
}

}
