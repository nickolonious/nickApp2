import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { LabsComponent } from "app/labs/labs.component";
import { LoginComponent } from "app/login/login.component";
import { SignupComponent } from "app/signup/signup.component";
import { MembersComponent } from "app/members/members.component";
import { EmailComponent } from "app/email/email.component";
import { AuthGuard } from "app/services/auth.service";

const router: Routes = [
    { path: '', pathMatch:'full', redirectTo: 'app-home'},
  
    { path: 'app-aboutme', component: AboutmeComponent },
    { path: 'app-blog', component: BlogComponent },
    { path: 'app-bugs', component: BugsComponent },
    { path: 'app-changelog', component: ChangelogComponent },
    { path: 'app-contact', component: ContactComponent },
    { path: 'app-dialog', component: DialogComponent },
    { path: 'app-home', component: HomeComponent },
    { path: 'app-labs', component: LabsComponent},
    { path: 'app-pets', component: PetsComponent },
    { path: 'app-records', component: RecordsComponent },
    { path: 'app-wishlist', component: WishlistComponent },
    { path: 'app-login', component: LoginComponent },
    { path: 'app-signup', component: SignupComponent },
    { path: 'app-email', component: EmailComponent },
    { path: 'app-members', component: MembersComponent, canActivate: [AuthGuard] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
