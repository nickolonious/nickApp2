import { IWishList } from "../wishlist/wishlist";

export class WishListModel implements IWishList {
    
        constructor (
            public height: string,
            public width: string,
            public image: string,
            public linkTitle: string,
            public link: string,
            public name: string,
            public price: string
        ){}
    }
    