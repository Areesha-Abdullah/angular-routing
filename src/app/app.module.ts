import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseService } from './services/course.service';
import { CourseComponent } from './courses/course/course.component';


const appRoute: Routes = [
  // {path: '',component: HomeComponent},
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'courses',component: CoursesComponent},
  {path: 'courses/course/:id',component: CourseComponent},
  {path: '**',component: ErrorComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
