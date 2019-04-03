import { Component, OnInit } from '@angular/core';
import MoviesService from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private moviesService:MoviesService) { }

  id: number;
  private sub: any;
  movie:any;

  ngOnInit() {
  	this.movie = {
       name:'',
       year:'',
       image_url:'',
       production_house: '',
       rating: '',
       type:'',
       language:'',
       date:''
    };
     this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.moviesService.getRemoteMovieById(this.id).subscribe((movie)=>{this.movie = movie;});
    });
  }

   updateMovie(){
    this.moviesService.updateRemoteMovie(this.movie).subscribe(()=>{this.router.navigate(['/list-movie']);});
  }

}
