import { MembersService } from './../../_services/members.service';
import { Component, inject, OnInit } from '@angular/core';
import { Member } from '../../_models/member';
import { AccountService } from '../../_services/account.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [TabsModule, FormsModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit {
  member?: Member;
  private accountService = inject(AccountService);
  private MembersService = inject(MembersService);

  ngOnInit(): void {
    const user = this.accountService.currentUser();
    if(!user) return;
    this.MembersService.getMember(user.username).subscribe({
      next: member => this.member = member
    })

  }

}
