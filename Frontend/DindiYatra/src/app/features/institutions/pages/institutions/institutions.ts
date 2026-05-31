import { Component } from '@angular/core';
import { Sidebar } from "../../../../core/layout/sidebar/sidebar";
import { Title } from "../../../../shared/components/title/title";
import { Search } from '../../../../shared/components/search/search';
import { InstitutionCard } from "../../../../shared/components/institution-card/institution-card";

@Component({
  selector: 'app-institutions',
  imports: [Sidebar, Title, Search, InstitutionCard],
  templateUrl: './institutions.html',
  styleUrl: './institutions.scss',
})
export class Institutions {
  nestedNav = [
    {
      link: 'Dashboard',
      navTo: '/'
    },
    {
      link: 'Institutions',
      navTo: '/institutions'
    }
  ];

  searchInstitutions(text: string){
    console.log(text)
  }
}
