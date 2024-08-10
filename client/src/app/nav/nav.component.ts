import { routes } from './../app.routes';
import { AccountService } from './../_services/account.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  private router = inject(Router);
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe({
      next: response =>  {
        console.log(response);
        void this.router.navigateByUrl('/members');
      },
      error: error => console.log(error)

    })
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
