import { ApiClientService } from '../api-client.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Movie } from '../movie';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];
  categories: Category[] = [];


  constructor(private apiService:  ApiClientService) { }

  ngOnInit(): void {

    this.apiService.getDiscoverMovies().subscribe(movies => this.movies = movies)

    this.apiService.getMovieCategories().subscribe(categories => this.categories = categories)

  }
}
