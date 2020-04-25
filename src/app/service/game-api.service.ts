import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../interface/categories';
import { Games } from '../interface/games';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.baseUrl + '/genres')
  }

  getAllGames(): Observable<Games[]> {
    return this.http.get<Games[]>(this.baseUrl + '/games')
  }

}
