import {Component, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'progress-bar',
  templateUrl: 'app/registration/progress-bar.component.html',
  directives: [RouterLink]
})

export class ProgressBarComponent {

  @Input() step: string;

  isActive(step) {
    return (this.step === step);
  }

  isDone(step) {
    if (this.step === 'login-details') {
      // no steps done
    } else if (this.step === 'contact-details') {
      // one step done
      if (step === 'login-details') {
        return true;
      }
    } else if (this.step === 'giving-page') {
      // two steps done
      if (step === 'login-details' || step === 'contact-details') {
        return true;
      }
    }
    return false;
  }

}