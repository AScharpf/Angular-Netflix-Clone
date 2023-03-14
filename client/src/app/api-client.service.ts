import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from './movie';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})

export class ApiClientService {

  private rootUrl = 'http://movied.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMovieDetails(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.rootUrl + `/movie/${id}`);
  }

  getDiscoverMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.rootUrl + '/discover');
  }

  getMovieCategories (): Observable<Category[]> {
    return this.http.get<Category[]>(this.rootUrl + '/categories');
  }

  getCategoryMovies (categoryId: number) : Observable<Movie[]> {
    return this.http.get<Movie[]>(this.rootUrl + `/categories/${categoryId}`);
  }
}
