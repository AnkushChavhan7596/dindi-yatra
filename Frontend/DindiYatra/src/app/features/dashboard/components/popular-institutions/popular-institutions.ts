import { Component, inject } from '@angular/core';
import { Title } from "../../../../shared/components/title/title";
import { Router } from '@angular/router';
import { InstitutionCard } from '../../../../shared/components/institution-card/institution-card';

@Component({
  selector: 'app-popular-institutions',
  imports: [Title, InstitutionCard],
  templateUrl: './popular-institutions.html',
  styleUrl: './popular-institutions.scss',
})
export class PopularInstitutions {
router = inject(Router);

  goToInstitutions(){
    this.router.navigate(["/institutions"]);
  }
}
