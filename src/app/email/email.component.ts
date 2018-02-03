import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {
    state: string = '';
    error: any;
    selectedValue: string;

    constructor(public af: AngularFire,private router: Router) {
      this.af.auth.subscribe(auth => { 
        if(auth) {
          this.router.navigateByUrl('/app-members');
        }
      });
  }

  onSubmit(formData) {
    if(formData.valid) {
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        this.router.navigate(['/app-members']);
      }).catch(
        (err) => {
        this.error = err;
      })
    }
  }

  association = [
    { value: 0, type: 'Friend'},
    { value: 1, type: 'Family'},
    { value: 3, type: 'Work'},
    { value: 4, type: 'Client'},
    { value: 5, type: 'Other' }
  ];

  ngOnInit() {
  }

}