import { Component, inject, input } from '@angular/core';
import { Button } from "../button/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-institution-card',
  imports: [Button],
  templateUrl: './institution-card.html',
  styleUrl: './institution-card.scss',
})
export class InstitutionCard {
  isInfo = input<boolean>(false);

  router = inject(Router);

  goToDetails(){
    this.router.navigate(["/institutions/12345"]);
  }
}
