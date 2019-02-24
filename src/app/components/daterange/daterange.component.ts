import { Component, Input} from '@angular/core';
import { DateRange } from '../../services/track.model';

@Component({
  selector: 'app-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.scss']
})
export class DaterangeComponent {

  @Input() dateRange: DateRange;

  constructor() {

  }

}
