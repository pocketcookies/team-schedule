import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Availability } from '../availability';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  @Input() availability: Availability;
  @Output() remove: EventEmitter<Availability> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.remove.emit(this.availability);
  }

}
