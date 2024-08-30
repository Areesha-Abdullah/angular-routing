import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  courses = [
    {name: 'Angular Course', description: "In this course, you'll learn about Angular...", type: "premium", price: '$11100', image: 'img1.png'},
    {name: 'JavaScript Essentials', description: "An introduction to JavaScript ...", type: "free", price: '$0', image: 'img1.png'},
    {name: 'Advanced Python', description: "Dive deeper into Python with advanced...", type: "premium", price: '$7500', image: 'img1.png'},
    {name: 'Web Development Bootcamp', description: "A comprehensive bootcamp covering HTML...", type: "premium", price: '$9500', image: 'img1.png'},
    {name: 'Data Science with R', description: "Learn data analysis, visualization, and....", type: "premium", price: '$8700', image: 'img1.png'},
    {name: 'Introduction to SQL', description: "Basics of SQL for database management ...", type: "free", price: '$0', image: 'img1.png'},


   
]


}
