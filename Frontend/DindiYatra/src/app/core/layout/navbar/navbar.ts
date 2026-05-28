import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from "../../../shared/components/button/button";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private router = inject(Router);

  logoClick() {
    this.router.navigate(['/']);
  }
}
