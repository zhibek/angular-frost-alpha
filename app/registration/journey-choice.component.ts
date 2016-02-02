import {Component} from 'angular2/core';
import {Router} from 'angular2/router'
import {NgForm} from 'angular2/common';

@Component({
  selector: 'journey-choice',
  templateUrl: 'app/registration/journey-choice.component.html'
})

export class JourneyChoiceComponent {

  _router: Router;
 
  constructor(_router: Router) {
    this._router = _router;
  }

  onSubmit() {
    this._router.navigate(['/Registration/LoginDetails']);
  }

}