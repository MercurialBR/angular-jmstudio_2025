import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input()
  banner_img = ""

  @Input()
  title = ""

  @Input()
  sub_title = ""
}
