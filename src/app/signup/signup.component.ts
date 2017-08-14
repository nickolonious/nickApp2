import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from "angularfire2";
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFire, private router: Router) { }

  onSubmit(formData) {
    if(formData.valid) {
     // console.log(formData);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          //console.log(success);
          this.router.navigate(['/app-members'])
        }).catch(
          (err) => {
            //console.log(err);
            this.error = err;
          }
        );
    }
  }

  ngOnInit() {
  }

}
