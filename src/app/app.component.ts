import { Component } from '@angular/core';
import { Availability } from './availability';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  availabilities = [
    new Availability()
  ];

  addAvailability() {
    this.availabilities.push(new Availability());
  }

  removeAvailability(availability: Availability) {
    this.availabilities.splice(this.availabilities.indexOf(availability), 1);
  }
}
