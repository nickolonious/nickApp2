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
 
  constructor(
    private af: AngularFire
  ) { 

  this.blog =  af.database.list('/Blog', {
  }).map((array) => array.reverse()) as FirebaseListObservable<IBlog[]>;
  
  this.blog.forEach(blog => {
    for(let post of blog) {

    }
  });

}



  ngOnInit() {
  }

}
