import { AccountService } from './../_services/account.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private AccountService = inject(AccountService);
  loggedIn = false;
  model: any = {};

  login() {
    this.AccountService.login(this.model).subscribe({
      next: response =>  {
        console.log(response);
        this.loggedIn = true;
      },
      error: error => console.log(error)

    })
  }
}
