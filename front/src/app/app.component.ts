import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front';
  ngOnInit(): void {
    initFlowbite();
  }

  constructor(private router: Router) {}

  showNavBar(): boolean {
    const currentUrl = this.router.url;
    return !['/login', '/signup'].includes(currentUrl);
  }
}
