import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { IBlog } from './blog';
import "rxjs/add/operator/map";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
 public blog: FirebaseListObservable<IBlog[]>;
 blogList: IBlog[];
  constructor(
  private af: AngularFire) { 
  this.blog =  af.database.list('/Blog', {
  }).map((array) => array.reverse()) as FirebaseListObservable<IBlog[]>;

  this.blog.forEach(posts => {
    for(let post of posts) {
       
       let todaysDate = new Date();
       let dateOfPost = new Date(post.date);

       post.postAge = todaysDate.getFullYear() - dateOfPost.getFullYear();

      if(post.postAge < 1){
        post.postAge = todaysDate.getMonth() - dateOfPost.getMonth();
        if(post.postAge === 1) {
          post.postAgeString = post.postAge + " month ago";
        }
        else if (post.postAge > 1) {
          post.postAgeString = post.postAge + " months ago";
        }
        else if(post.postAge < 1) {
          post.postAge = todaysDate.getDate() - dateOfPost.getDate();
          if(post.postAge === 1) {
            post.postAgeString = post.postAge + " day ago";
          }
          else if(post.postAge > 1) {
            post.postAgeString = post.postAge + " days ago";
          }
          else if(post.postAge < 1) {
            post.postAge = todaysDate.getHours() - dateOfPost.getHours();
            if(post.postAge > 1) {
              post.postAgeString = post.postAge + " hours ago";
            }
            else if(post.postAge === 1) {
              post.postAgeString = post.postAge + " hour ago";
            }
            else if(post.postAge < 1) {
              post.postAge = todaysDate.getMinutes() - dateOfPost.getMinutes();
              if(post.postAge > 1) {
                post.postAgeString = post.postAge + " minutes ago";
              }
              else if(post.postAge === 1) {
                post.postAgeString = post.postAge + " minute ago";
              }
              if(post.postAge < 1) {
                post.postAge = todaysDate.getSeconds() - dateOfPost.getSeconds();
                if(post.postAge === 1) {
                  post.postAgeString = post.postAge + " second ago";
                }
                else {
                  post.postAgeString = post.postAge + " seconds ago";
              }
            }
          }
        }
      }
    } else {     
      post.postAgeString = (todaysDate.getFullYear() - dateOfPost.getFullYear()).toString(); 
    }
    
    this.blogList = posts;
    
    console.log(this.blogList);
    };
  })
}



  ngOnInit() {
  }

}
