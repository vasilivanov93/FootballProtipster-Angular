import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BetService {
  private readonly createUrl = 'http://localhost:5000/bet/create';
  private readonly historyUrl = 'http://localhost:5000/bet/history';
  constructor(private http: HttpClient) { }

  create(body) {
    return this.http.post(this.createUrl, body);
  }

  history() {
    return this.http.get(this.historyUrl);
  }
}
