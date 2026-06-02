import { Component, signal } from '@angular/core';
import { Sidebar } from "../../../../core/layout/sidebar/sidebar";
import { Title } from "../../../../shared/components/title/title";
import { Tours_BREADCRUMB_BASE } from '../../contants/navigation';
import { Tabs } from "../../../../shared/components/tabs/tabs";
import { COMPLETED, TOURS_TAB, UPCOMING } from '../../contants/tab';
import { UpcomingTab } from '../../components/upcoming-tab/upcoming-tab';
import { CompletedTab } from '../../components/completed-tab/completed-tab';

@Component({
  selector: 'app-tours',
  imports: [Sidebar, Title, Tabs, UpcomingTab, CompletedTab],
  templateUrl: './tours.html',
  styleUrl: './tours.scss',
})
export class Tours {
  nestedNav = Tours_BREADCRUMB_BASE;
  upcoming = UPCOMING;
  completed = COMPLETED;

  tabs = TOURS_TAB;

  selectedTab = signal(this.tabs[0]?.id);

  onTabChanged(id: string){
    console.log(id)
    this.selectedTab.set(id);
  }
}
