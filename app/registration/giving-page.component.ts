import {Component} from 'angular2/core';
import {Router} from 'angular2/router'
import {NgForm} from 'angular2/common';

@Component({
  selector: 'giving-page',
  templateUrl: 'app/registration/giving-page.component.html'
})

export class GivingPageComponent {

  _router: Router;
 
  constructor(_router: Router) {
    this._router = _router;
  }

  onSubmit() {
    this._router.navigate(['/Registration']);
  }

}