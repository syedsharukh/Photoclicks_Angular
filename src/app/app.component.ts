import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, RouterOutlet, RouterModule, CommonModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title= 'Photoclicks'
  menuItems = ['Home', 'Services', 'About Us', 'Portfolio'];
}
