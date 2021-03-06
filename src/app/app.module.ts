import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { firebaseConfig } from './../environments/firebase.config';
import { GitHub } from 'github-api';
import { AuthGuard } from './services/auth.service';
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
import { LabsComponent } from './labs/labs.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';

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
    SearchBox,
    LabsComponent,
    LoginComponent,
    EmailComponent,
    MembersComponent,
    SignupComponent
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
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
}
