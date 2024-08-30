import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
course ;
courseId; 

constructor(private activatedRoute: ActivatedRoute, private service: CourseService ){

}

ngOnInit():void{
  this.courseId=this.activatedRoute.snapshot.paramMap.get('id');//from paramMap. get we can value of id that we will be clicking
  this.course=this.service.courses.find(x => x.cId == this.courseId);

}
}
