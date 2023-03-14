import { Component, OnInit, Input } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Movie } from '../movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() categoryId: number = 0;
  @Input() movies: Movie[] = [];

  constructor(private apiClient: ApiClientService) { }

  ngOnInit(): void {
    if (this.categoryId !== 0) {
      this.getCategoryMovies(this.categoryId);
    }
  }
  getCategoryMovies(id: number): void {
    this.apiClient.getCategoryMovies(id).subscribe(movies => this.movies = movies);
  }
}
