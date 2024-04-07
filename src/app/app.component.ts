import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LandingComponent, NavbarComponent]
})
export class AppComponent {
  title = 'codequest-app';
}
