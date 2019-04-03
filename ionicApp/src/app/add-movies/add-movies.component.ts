import { Component, OnInit } from '@angular/core';
import MoviesService from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss'],
})
export class AddMoviesComponent implements OnInit {
	movie = {
       name:'',
       year:'',
       image_url:'',
       production_house: '',
       rating: '',
       type:'',
       language:'',
       date:''
    };

  constructor(private router: Router, private moviesService: MoviesService) { }

  ngOnInit() {}

   addMovie(movie){
  	this.moviesService.addRemoteMovie(movie).subscribe(()=>{
  		this.router.navigate(['/list-movies']);
  	});
  	console.log(movie);
  }

}
