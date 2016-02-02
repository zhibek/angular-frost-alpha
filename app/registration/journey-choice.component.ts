import {Component} from 'angular2/core';
import {Router} from 'angular2/router'
import {NgForm} from 'angular2/common';

import {RegistrationService} from './registration.service';

@Component({
  selector: 'journey-choice',
  templateUrl: 'app/registration/journey-choice.component.html'
})

export class JourneyChoiceComponent {

  _router: Router;
  _service: RegistrationService;

  constructor(_router: Router, _service: RegistrationService) {
    this._router = _router;
    this._service = _service;
  }

  onSubmit() {
    this._router.navigate(['/Registration/LoginDetails']);
  }

  showPageTypeAll() {
    return (this._service.model.age === 'adult' 
    || this._service.model.age === 'junior');
  }

  showPageTypeAdult() {
    return (this._service.model.age === 'adult');
  }

}