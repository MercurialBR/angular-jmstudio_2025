import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-course',
  templateUrl: './model-course.component.html',
  styleUrls: ['./model-course.component.scss']
})
export class ModelCourseComponent {
  @Input()
  title =""

  @Input()
  sub_title1 =""
  @Input()
  sub_title2 =""
  @Input()
  sub_title3 =""
  @Input()
  sub_title4 =""
  @Input()
  sub_title5 =""
}
