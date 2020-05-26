import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categories } from "../interface/categories";
import { Games } from "../interface/games";
import { Publishers } from "../interface/publishers";
import { Developers } from "../interface/developers";

@Injectable({
  providedIn: "root",
})
export class GameApiService {
  private baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.baseUrl + "/genres");
  }

  getAllPublishers(): Observable<Publishers[]> {
    return this.http.get<Publishers[]>(this.baseUrl + "/publishers");
  }

  getAllDevelopers(): Observable<Developers[]> {
    return this.http.get<Developers[]>(this.baseUrl + "/developers");
  }

  getAllGames(): Observable<Games[]> {
    return this.http.get<Games[]>(this.baseUrl + "/games");
  }

  deleteGame(id: number) {
    return this.http.delete(this.baseUrl + "/games/" + id);
  }

  getSingleGame(id: number) {
    return this.http.get(this.baseUrl + "/games/" + id);
  }
}
