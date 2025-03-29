import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserCountService } from '../../../services/user-count.service'; // путь под себя

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  userCount$;

  constructor(private userCountService: UserCountService) {
    this.userCount$ = this.userCountService.userCount$;
  }
}