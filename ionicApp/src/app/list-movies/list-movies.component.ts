import { Component, OnInit } from '@angular/core';
import MoviesService from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router: Router) { }

  movies = [];

  ngOnInit() {
  	 this.moviesService.getRemoteMovies().subscribe((result) => {this.movies = result;});
  }

 deleteMovies(movie){
    this.moviesService.deleteRemoteMovies(movie).subscribe((e) => {
      this.moviesService.getRemoteMovies().subscribe((result) => {this.movies = result;});
    });
   // this.list = this.customerService.getCustomers();
  }

   editMovie(movie){
   this.router.navigate(['/edit-movie/'+movie.id]);

   }
}
