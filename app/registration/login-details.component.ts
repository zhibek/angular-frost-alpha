import {Component} from 'angular2/core';
import {Router} from 'angular2/router'
import {NgForm} from 'angular2/common';

import {RegistrationService} from './registration.service';

@Component({
  selector: 'login-details',
  templateUrl: 'app/registration/login-details.component.html'
})

export class LoginDetailsComponent {

  _router: Router;
  _service: RegistrationService;

  constructor(_router: Router, _service: RegistrationService) {
    this._router = _router;
    this._service = _service;
  }

  onSubmit() {
    this._router.navigate(['/Registration/ContactDetails']);
  }

}