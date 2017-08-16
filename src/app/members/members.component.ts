import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';
  provider: string = "";
  picture: string = "";

  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
        if(this.name.google) {
          this.provider =  "auth provider: Google";
          this.picture = this.name.auth.photoURL;
        } else if (this.name.facebook) {
          this.provider = "auth provider: Facebook";
          this.picture = this.name.auth.photoURL;
        } else {
          this.provider = " auth provider: Email";
          this.picture = "../../assets/profile.svg";
        }
        if(this.name.auth.photoURL == null) {
        }
      
      }
      
    });

  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/app-login');
  }

  ngOnInit() {
  }
}