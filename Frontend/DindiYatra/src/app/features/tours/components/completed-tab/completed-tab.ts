import { Component } from '@angular/core';
import { Tour } from "../tour/tour";
import { Dropdown } from "../../../../shared/components/dropdown/dropdown";
import { Search } from "../../../../shared/components/search/search";

@Component({
  selector: 'app-completed-tab',
  imports: [Tour, Dropdown, Search],
  templateUrl: './completed-tab.html',
  styleUrl: './completed-tab.scss',
})
export class CompletedTab {
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
