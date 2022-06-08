import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Deywid';
  userData = {
    email: 'deywid@email.com',
    role: 'admin',
  };
  title = 'curso-angular';
}
