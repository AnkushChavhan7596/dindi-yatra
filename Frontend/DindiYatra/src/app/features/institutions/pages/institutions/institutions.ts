import { Component, inject, OnInit } from '@angular/core';
import { Sidebar } from "../../../../core/layout/sidebar/sidebar";
import { Title } from "../../../../shared/components/title/title";
import { Search } from '../../../../shared/components/search/search';
import { InstitutionCard } from "../../../../shared/components/institution-card/institution-card";
import { LoaderService } from '../../../../shared/services/loader/loader-service';
import { INSTITUTION_BREADCRUMB_BASE } from '../../contants/navigation';

@Component({
  selector: 'app-institutions',
  imports: [Sidebar, Title, Search, InstitutionCard],
  templateUrl: './institutions.html',
  styleUrl: './institutions.scss',
})
export class Institutions implements OnInit {
  loaderService = inject(LoaderService);
  
  nestedNav = INSTITUTION_BREADCRUMB_BASE;

  searchInstitutions(text: string){
    console.log(text)
  }

  ngOnInit(): void {
      this.loaderService.show();

      setTimeout(() => {
        this.loaderService.hide();
      }, 1000);
  }
}
