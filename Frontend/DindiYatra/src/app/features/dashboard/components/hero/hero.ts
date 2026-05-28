import { Component, inject } from '@angular/core';
import { Button } from "../../../../shared/components/button/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  title = "Experience Divine Journeys"
  desc = "Join spiritual tours organized by trusted institutions. Safe, easy and transparent."

  router = inject(Router);

  exploreTours(){
    console.log("Explore tours")
    this.router.navigate(["/tours"]);
  }
}
