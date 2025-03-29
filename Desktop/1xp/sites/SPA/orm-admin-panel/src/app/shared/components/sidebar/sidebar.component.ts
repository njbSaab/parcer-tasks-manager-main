import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserCountService } from '../../../services/user-count.service'; 
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  userCount$;

  constructor(
    private userCountService: UserCountService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userCount$ = this.userCountService.userCount$;
  }

  logout(): void {
    this.authService.logout(); // 👈 всё уже делается внутри
  }
}