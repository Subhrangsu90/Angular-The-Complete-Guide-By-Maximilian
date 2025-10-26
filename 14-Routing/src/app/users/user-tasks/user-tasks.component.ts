import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // userId = input.required<string>();
  userName = '';
  private userService = inject(UsersService);
  private activedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  // userName = computed(
  //   () => this.userService.users.find(u => u.id === this.userId())?.name
  // )

  ngOnInit(): void {
    console.log(this.activedRoute);
    const subscription = this.activedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName = this.userService.users.find(
          (u) => u.id === paramMap.get('userId')
        )?.name || '';
      },
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
