import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  imports: [CommonModule],
})
export class AdminDashboardComponent {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log('Users:', this.users);
    });
  }

  editUser(user: any) {
    console.log('Edit user:', user);
  }

  deleteUser(user: any) {
    console.log('Delete user:', user);
  }
}
