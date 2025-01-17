import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent {
  @Input()
  background_image = ""

  @Input()
  title = ""

  @Input()
  sub_title = ""
}
