import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {CustomerComponent} from './customer/customer.component';
import {AddCustomerComponent} from './add.customer/add.customer.component';
import {ListCustomerComponent} from './list.customer/list.customer.component';
import {EditCustomerComponent} from './edit.customer/edit.customer.component';
import {StudentComponent} from './student/student.component';
import {AddStudentComponent} from './add.student/add.student.component';
import {ListStudentComponent} from './list.student/list.student.component';
import {EditStudentComponent} from './edit.student/edit.student.component';
import {MoviesComponent} from './movies/movies.component';
import {AddMoviesComponent} from './add-movies/add-movies.component';
import {ListMoviesComponent} from './list-movies/list-movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'add-customer', component: AddCustomerComponent},
  { path: 'list-customer', component: ListCustomerComponent},
  { path: 'edit-customer/:id', component: EditCustomerComponent},
  { path: 'student', component: StudentComponent},
  { path: 'add-student', component: AddStudentComponent},
  { path: 'list-student', component: ListStudentComponent},
  { path: 'edit-student/:rollno', component: EditStudentComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'add-movies', component: AddMoviesComponent},
  { path: 'list-movies', component: ListMoviesComponent},
  { path: 'edit-movie/:id', component: EditMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
