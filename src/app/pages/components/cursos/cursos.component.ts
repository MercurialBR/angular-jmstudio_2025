import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  @Input()
  title = ""

  @Input()
  sub_title = ""

  @Input()
  image1 = ""

  @Input()
  image2 = ""

  @Input()
  image3 = ""

  @Input()
  image4 = ""

  @Input()
  image5 = ""

  @Input()
  image6 = ""
}
