import {Component} from 'angular2/core';
import {Router} from 'angular2/router'
import {NgForm} from 'angular2/common';

@Component({
  selector: 'contact-details',
  templateUrl: 'app/registration/contact-details.component.html'
})

export class ContactDetailsComponent {

  _router: Router;
 
  constructor(_router: Router) {
    this._router = _router;
  }

  onSubmit() {
    this._router.navigate(['/Registration/GivingPage']);
  }

}