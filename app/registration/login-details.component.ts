import {Component} from 'angular2/core';
import {Router} from 'angular2/router'
import {NgForm} from 'angular2/common';

@Component({
  selector: 'login-details',
  templateUrl: 'app/registration/login-details.component.html'
})

export class LoginDetailsComponent {

  _router: Router;
 
  constructor(_router: Router) {
    this._router = _router;
  }

  onSubmit() {
    this._router.navigate(['/Registration/ContactDetails']);
  }

}