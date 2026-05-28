import { Component, inject } from '@angular/core';
import { Title } from '../../../../shared/components/title/title';
import { Router } from '@angular/router';
import { UpcomingTour } from '../upcoming-tour/upcoming-tour';

@Component({
  selector: 'app-upcoming-tours',
  imports: [Title, UpcomingTour],
  templateUrl: './upcoming-tours.html',
  styleUrl: './upcoming-tours.scss',
})
export class UpcomingTours {
  router = inject(Router);

  goToTours(){
    this.router.navigate(["/tours"]);
  }
}
