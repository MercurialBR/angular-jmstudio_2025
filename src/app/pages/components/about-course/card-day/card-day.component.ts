import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-day',
  templateUrl: './card-day.component.html',
  styleUrls: ['./card-day.component.scss']
})
export class CardDayComponent {
  @Input()
  title = ""

  @Input()
  sub_title1 = ""

  @Input()
  sub_title2 = ""

  @Input()
  sub_title3 = ""

  @Input()
  sub_title4 = ""
}
