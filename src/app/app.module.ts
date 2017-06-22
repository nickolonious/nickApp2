import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { firebaseConfig } from './../environments/firebase.config';

import 'hammerjs/hammer';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component';
import { RecordsComponent } from './records/records.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DialogComponent } from './dialog/dialog.component';
import { BugsComponent } from './bugs/bugs.component';
import { RecordSearchPipe } from './records/record-search.pipe';
import { SearchBox } from "app/records/search-box";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    RecordsComponent,
    ContactComponent,
    ChangelogComponent,
    AboutmeComponent,
    WishlistComponent,
    PetsComponent,
    DialogComponent,
    BugsComponent,
    RecordSearchPipe,
    SearchBox
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
