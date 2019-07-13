import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  @Output() title = new EventEmitter();

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  changeTitle(name) {
    this.title.emit(name);
  }



  logout() {
    this.auth.logout();
  }
}
