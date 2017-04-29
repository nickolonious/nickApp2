import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

 wishlist: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.wishlist = af.database.list('/WishList');
    console.log(this.wishlist);
  }

  ngOnInit() {
  }

}
