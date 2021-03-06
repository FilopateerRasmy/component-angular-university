import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
@Input() course!:Course;
@Input() cardIndex!:number;
@Output() courseSelected = new EventEmitter<Course>()
  constructor() { }

  ngOnInit(): void {
  }


  onViewCourse(){
    console.log('course is selected');
    this.courseSelected.emit(this.course);
  }
}
