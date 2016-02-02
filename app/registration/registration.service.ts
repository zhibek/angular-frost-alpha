import {Injectable} from 'angular2/core';

import {Registration} from './registration';

@Injectable()
export class RegistrationService {

  model = new Registration();

  get dump() {
    return JSON.stringify(this.model);
  }

}