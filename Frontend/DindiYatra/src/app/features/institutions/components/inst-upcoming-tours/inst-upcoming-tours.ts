import { Component, inject } from '@angular/core';
import { Title } from "../../../../shared/components/title/title";
import { InstTourCard } from '../inst-tour-card/inst-tour-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inst-upcoming-tours',
  imports: [Title, InstTourCard],
  templateUrl: './inst-upcoming-tours.html',
  styleUrl: './inst-upcoming-tours.scss',
})
export class InstUpcomingTours {
  router = inject(Router);

  goToTours(){
    this.router.navigate(["/tours"]);
  }
}
