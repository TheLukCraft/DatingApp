import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseUerUrl = 'https://localhost:5001/api/';

  login(model: any) {
    return this.http.get(this.baseUerUrl + 'account/login', model);
  }
}
