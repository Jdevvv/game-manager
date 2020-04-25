import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  private baseUrl = 'http://localhost:3000';

  constructor() { }
}
