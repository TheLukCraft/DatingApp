import { LikesService } from './../../_services/likes.service';
import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { Member } from '../../_models/member';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent {
  private LikesService = inject(LikesService);
  member = input.required<Member>();
  hasLiked = computed(() => this.LikesService.likeIds().includes(this.member().id));
}
