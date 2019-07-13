import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styles: []
})
export class ConfigComponent implements OnInit {
  uid = '4DxzrXDNmTRWDKHK8T8gVfFmR302';
  user: any;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.get_user_uid(this.uid).subscribe(user => {
      this.user = user[0];
      console.log(user);
    });
  }

  generatePin() {
    this.user['pin'] = Math.floor(Math.random() * 90000) + 10000;
  }

  sendData() {
    const result = this.userService.update_user(this.user.username, this.user);
    if (result) {
      alert('Datos guardados');
    } else {
      alert('Error al guardar datos');
    }
  }
}
