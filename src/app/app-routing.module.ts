import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from "app/aboutme/aboutme.component";
import { BlogComponent } from "app/blog/blog.component";
import { BugsComponent } from "app/bugs/bugs.component";
import { ChangelogComponent } from "app/changelog/changelog.component";
import { ContactComponent } from "app/contact/contact.component";
import { HomeComponent } from "app/home/home.component";
import { PetsComponent } from "app/pets/pets.component";
import { RecordsComponent } from "app/records/records.component";
import { WishlistComponent } from "app/wishlist/wishlist.component";
import { DialogComponent } from "app/dialog/dialog.component";


const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo: 'home'},
    { path: 'app-aboutme', component: AboutmeComponent },
    { path: 'app-blog', component: BlogComponent },
    { path: 'app-bugs', component: BugsComponent },
    { path: 'app-changelog', component: ChangelogComponent },
    { path: 'app-contact', component: ContactComponent },
    { path: 'app-dialog', component: DialogComponent },
    { path: 'app-home', component: HomeComponent },
    { path: 'app-pets', component: PetsComponent },
    { path: 'app-records', component: RecordsComponent },
    { path: 'app-wishlist', component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
