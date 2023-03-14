import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';


@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  movie!: Movie

  constructor(private apiService:  ApiClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getMovieDetails(id)
      .subscribe(movie => this.movie = movie);
  }




}
