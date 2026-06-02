import { Component } from '@angular/core';
import { Search } from "../../../../shared/components/search/search";
import { Dropdown } from '../../../../shared/components/dropdown/dropdown';

@Component({
  selector: 'app-upcoming-tab',
  imports: [Search, Dropdown],
  templateUrl: './upcoming-tab.html',
  styleUrl: './upcoming-tab.scss',
})
export class UpcomingTab {
  institutions = [
    { label: 'All Institutions', value: 0 },
    { label: 'Shiv Shakti Mandal', value: 1 },
    { label: 'Ganesh Group', value: 2 }
  ];

  onInstitutionChange(value: any) {
    console.log('Selected:', value);
  }

  handleTourSearch(text: string){
    console.log("Search text: ", text)
  }
}
