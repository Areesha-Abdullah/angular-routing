import { Component } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    {cId:1,name: 'Angular Course', description: "In this course, you'll learn about Angular...", type: "premium", price: '$11100', image: 'img1.png'},
    {cId:2,name: 'JavaScript Essentials', description: "An introduction to JavaScript ...", type: "free", price: '$0', image: 'img1.png'},
    {cId:4,name: 'Advanced Python', description: "Dive deeper into Python with advanced...", type: "premium", price: '$7500', image: 'img1.png'},
    {cId:5,name: 'Web Development Bootcamp', description: "A comprehensive bootcamp covering HTML...", type: "premium", price: '$9500', image: 'img1.png'},
    {cId:6,name: 'Data Science with R', description: "Learn data analysis, visualization, and....", type: "premium", price: '$8700', image: 'img1.png'},
    {cId:7,name: 'Introduction to SQL', description: "Basics of SQL for database management ...", type: "free", price: '$0', image: 'img1.png'},
    {cId:8,name: 'Machine Learning Fundamentals', description: "Understand the basics of machine ...", type: "premium", price: '$12000', image: 'img1.png'},
    {cId:9,name: 'UX/UI Design Principles', description: "Learn the principles of user experience...", type: "free", price: '$0', image: 'img1.png'},
    {cId:10,name: 'React Native Development', description: "Build mobile applications using ...", type: "premium", price: '$9800', image: 'img1.png'},
    {cId:12,name: 'Introduction to Cloud Computing', description: "Explore cloud computing concepts...", type: "free", price: '$0', image: 'img1.png'},
    {cId:13,name: 'Cybersecurity Basics', description: "Understand the fundamentals of cybersecur...", type: "premium", price: '$6800', image: 'img1.png'},
    {cId:14,name: 'Blockchain Technology', description: "Learn about blockchain technology a...", type: "premium", price: '$8400', image: 'img1.png'},
   
]

constructor(private route: Router , private activatedRoute: ActivatedRoute ){

}

home(){
  // this.route.navigate(['home'], {relativeTo: this.activatedRoute}) // for relative path
  this.route.navigateByUrl('home') // for absolute path
}

}