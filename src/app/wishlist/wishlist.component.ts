import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { IWishList } from "app/wishlist/wishlist";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
 public wishlist: FirebaseListObservable<IWishList[]>;
 public wishlistList: IWishList[];

  constructor(private af: AngularFire) {
    this.wishlist = af.database.list('/WishList');

    this.wishlist.forEach(wishes => {
      this.wishlistList = wishes;      
    })

;    

  }

  ngOnInit() {
  }

}
